import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = this.projectService.getProjects();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  deleteProject(deleteId: number): void {
    const index = this.projects.findIndex(element => element.id === deleteId);
    this.projects.splice(index, 1);
  }

}
