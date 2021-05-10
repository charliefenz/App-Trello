import { Injectable } from '@angular/core';
import { Project } from '../../app/Models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];

  constructor() { }

  getProjects = (): Project[] => {
    return this.projects;
  }

  getProject(projectId: number): Project {
    const index = this.findProject(projectId);
    return this.projects[index];
  }

  createProject = (inputTitle: string, inputDescription: string, inputDate: Date): void => {
    const project: Project = {
      id: this.addProjectId(),
      title: inputTitle,
      description: inputDescription,
      creationDate: inputDate,
      tasks: []
    };
    this.projects.push(project);
  }

  editProject(projectId: number, editTitle: string, editDescription: string): void {
    const index = this.findProject(projectId);
    this.projects[index].title = editTitle;
    this.projects[index].description = editDescription;
  }

  deleteProject(projectId: number): void {
    const index = this.findProject(projectId);
    this.projects.splice(index, 1);
  }

  findProject(projectId: number): number {
    const index = this.projects.findIndex(element => element.id === projectId);
    return index;
  }

  addProjectId(): number {
    if (this.projects.length < 1) {
      return 1;
    }
    else {
      return this.projects.length + 1;
    }
  }
}
