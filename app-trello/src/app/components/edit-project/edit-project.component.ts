import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Project } from 'src/app/Models/project';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Project, public dialog: MatDialog) { }

  formOk = true;
  editTitle = this.data.title;
  editDescription = this.data.description;

  ngOnInit(): void {
  }

  editProject(projectForm: NgForm): void {
    if (projectForm.valid) {
      this.data.title = this.editTitle;
      this.data.description = this.editDescription;
      console.log(this.data);
      this.formOk = true;
      this.dialog.getDialogById('editProjectDialog').close();
    }
    else {
      this.formOk = false;
    }
  }

  deleteProject(): void {
    this.dialog.getDialogById('editProjectDialog').close('delete');
  }

}
