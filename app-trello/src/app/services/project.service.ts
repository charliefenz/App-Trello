import { Injectable } from '@angular/core';
import { Project } from '../../app/Models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];

  constructor() { }

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

  getProjects = (): Project[] => {
    return this.projects;
  }
}
