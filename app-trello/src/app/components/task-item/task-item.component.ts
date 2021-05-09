import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  taskSelected = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  completeTask(task: Task): void {
    task.completed = true;
  }

  unCompleteTask(task: Task): void {
    task.completed = false;
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      autoFocus: false,
      hasBackdrop: true,
      id: 'editTaskDialog',
      data: task});

    dialogRef.afterClosed().subscribe((res) => {
        if (res === 'delete') {
          this.taskSelected.emit(task.id);
        }});
  }

  ngOnInit(): void {
  }

}
