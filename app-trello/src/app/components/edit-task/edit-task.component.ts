import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DataDialogReciever } from 'src/app/Models/dialogDataReciever';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  task = this.taskService.getTask(this.data.projectId, this.data.taskId);
  formOk = true;
  dateOk = true;
  editName = this.task.name;
  editDueDate = this.task.dueDate;
  editPriority = this.task.priority;
  dueDays = Math.round((new Date(this.task.dueDate).getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataDialogReciever,
    public dialog: MatDialog,
    private taskService: TaskService) { }

  ngOnInit(): void {
  }

  editTask(taskForm: NgForm): void {
    if (taskForm.valid && this.editDueDate != null) {
      this.taskService.editTask(this.data.projectId, this.data.taskId, this.editName, this.editDueDate, this.editPriority);
      this.formOk = true;
      this.dateOk = true;
      this.dialog.getDialogById('editTaskDialog').close();
    } else {
      this.formOk = false;
    }
  }

  deleteTask(): void {
    this.dialog.getDialogById('editTaskDialog').close('delete');
  }
}
