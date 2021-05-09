import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataProjectId: number,
    public dialog: MatDialog,
    private projectService: ProjectService
    ) { }

  project = this.projectService.getProject(this.dataProjectId);
  formOk = true;
  editTitle = this.project.title;
  editDescription = this.project.description;

  ngOnInit(): void {
  }

  editProject(projectForm: NgForm): void {
    if (projectForm.valid) {
      this.projectService.editProject(this.dataProjectId, this.editTitle, this.editDescription);
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
