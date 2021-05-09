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

  createProject = (inputNumber: number, inputTitle: string, inputDescription: string, inputDate: Date ) => {
    const project: Project = {
      id: inputNumber,
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
    console.log(this.projects);
  }

  deleteProject(projectId: number): void {
    const index = this.findProject(projectId);
    this.projects.splice(index, 1);
  }

  findProject(projectId: number): number {
    return this.projects.findIndex(element => element.id === projectId);
  }
}
