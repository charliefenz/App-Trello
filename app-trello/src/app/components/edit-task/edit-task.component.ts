import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from 'src/app/Models/task';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  formOk = true;
  editName = this.data.name;
  editDueDate = formatDate(this.data.dueDate, 'shortDate', 'es');
  editPriority = this.data.priority;
  dueDays = Math.round((new Date(this.data.dueDate).getTime() - this.data.creationDate.getTime()) / 1000 / 60 / 60 / 24);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Task, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editTask(taskForm: NgForm): void {
    if (taskForm.valid && this.checkDateOk(this.editDueDate)) {
      this.data.name = this.editName;
      this.data.dueDate = new Date(formatDate(this.editDueDate, 'shortDate', 'es'));
      this.data.priority = this.editPriority;
      this.formOk = true;
      this.dialog.getDialogById('editTaskDialog').close();
      console.log(this.data);
    }
    else {
      this.formOk = false;
    }
  }

  checkDateOk(date: string): boolean {
    const check = new Date(date).getDate();
    if (isNaN(check)) {
      return false;
    }
    else {
      return true;
    }
  }

}
