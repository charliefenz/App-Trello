import { Injectable } from '@angular/core';
import { Project } from '../../app/Models/project';
import { Task } from '../Models/task';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  project: Project;
  task: Task;
  constructor(private projectService: ProjectService) { }

  getTask(projectId: number, taskId: number): Task {
    this.project = this.projectService.getProject(projectId);
    const index = this.project.tasks.findIndex((element) => element.id === taskId);
    return this.project.tasks[index];
  }

  createTask(projectId: number, inputName: string): void {
    this.project = this.projectService.getProject(projectId);
    const task: Task = {
      id: this.addTaskId(),
      name: inputName,
      priority: 1,
      creationDate: new Date(),
      dueDate: new Date(),
      completed: false
    };
    this.project.tasks.push(task);
  }

  editTask(projectId: number, taskId: number, editName: string, editDueDate: Date, editPriority: number): void {
    this.task = this.getTask(projectId, taskId);
    this.task.name = editName;
    this.task.dueDate = editDueDate;
    this.task.priority = editPriority;
    console.log(this.project);
    console.log(this.task);
  }

  deleteTask(projectId: number, taskId: number): void {
    this.project = this.projectService.getProject(projectId);
    const taskIndex = this.project.tasks.findIndex(element => element.id === taskId);
    this.project.tasks.splice(taskIndex, 1);
  }

  completeTask(projectId: number, taskId: number): void {
    this.task = this.getTask(projectId, taskId);
    this.task.completed = true;
  }

  unCompleteTask(projectId: number, taskId: number): void {
    this.task = this.getTask(projectId, taskId);
    this.task.completed = false;
  }

  addTaskId(): number {
    if (this.project.tasks.length < 1) {
      return 1;
    }
    else {
      return this.project.tasks.length + 1;
    }
  }

}





