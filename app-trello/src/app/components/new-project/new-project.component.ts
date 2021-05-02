import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, public dialog: MatDialog) { }

  formOk = true;

  ngOnInit(): void {
  }

  createProject(projectForm: NgForm): void {
    if (projectForm.valid) {
      const today = new Date();
      this.projectService.createProject(projectForm.form.value.title, projectForm.form.value.description, today);
      console.log(this.projectService.getProjects());
      this.formOk = true;
      this.dialog.getDialogById('newProjectDialog').close();
    }
    else {
      this.formOk = false;
    }
  }

}
