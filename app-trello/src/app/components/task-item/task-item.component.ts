import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { Project } from 'src/app/Models/project';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: Task;

  @Input()
  project: Project;

  @Output()
  taskSelected = new EventEmitter<number>();

  constructor(public dialog: MatDialog, private taskService: TaskService) { }

  completeTask(task: Task): void {
    this.taskService.completeTask(this.project.id, task.id);
  }

  unCompleteTask(task: Task): void {
    this.taskService.unCompleteTask(this.project.id, task.id);
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      autoFocus: false,
      hasBackdrop: true,
      id: 'editTaskDialog',
      data: {taskId: task.id, projectId: this.project.id}});

    dialogRef.afterClosed().subscribe((res) => {
        if (res === 'delete') {
          this.taskSelected.emit(task.id);
        }});
  }

  ngOnInit(): void {
  }

}
