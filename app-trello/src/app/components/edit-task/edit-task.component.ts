import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from 'src/app/Models/task';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  formOk = true;
  dateOk = true;
  editName = this.data.name;
  editDueDate = this.data.dueDate;
  editPriority = this.data.priority;
  dueDays = Math.round((new Date(this.data.dueDate).getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Task, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editTask(taskForm: NgForm): void {
    if (taskForm.valid && this.editDueDate != null) {
      this.data.name = this.editName;
      this.data.dueDate = this.editDueDate;
      this.data.priority = this.editPriority;
      this.formOk = true;
      this.dateOk = true;
      this.dialog.getDialogById('editTaskDialog').close();
      console.log(this.data);
    } else {
      this.formOk = false;
    }
  }
}
