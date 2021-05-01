import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  createProject(projectForm: NgForm): void {
    const today = new Date();
    this.projectService.createProject(projectForm.form.value.title, projectForm.form.value.description, today);
    console.log(this.projectService.getProjects());
  }

}
