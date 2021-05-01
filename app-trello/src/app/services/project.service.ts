import { Injectable } from '@angular/core';
import { Project } from '../../app/Models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];

  constructor() { }

  createProject = (inputTitle: string, inputDescription: string, inputDate: Date ) => {
    const project: Project = {
      title: inputTitle,
      description: inputDescription,
      creationDate: inputDate,
      tasks: []
    };
    this.projects.push(project);
  }

  getProjects = (): Project[] => {
    return this.projects;
  }
}
