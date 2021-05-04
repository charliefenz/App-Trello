import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/project';
import { Task } from 'src/app/Models/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input()
  project: Project;

  newTaskPlaceholder = 'Agregar una nueva tarea...';
  newTaskValue = null;
  newTaskFocused = false;

  constructor() { }

  ngOnInit(): void {
  }

  newTaskFocus(): void {
     this.newTaskPlaceholder = '';
     this.newTaskFocused = true;
  }

  createTask(taskCreateForm: NgForm): void {
    const task: Task = {
      name: taskCreateForm.form.value.newTask,
      priority: 1,
      creationDate: new Date(),
      dueDate: new Date(),
      completed: false
    };
    this.project.tasks.push(task);
    this.newTaskValue = null;
    this.newTaskFocused = false;
    this.newTaskPlaceholder = 'Agregar una nueva tarea...';
  }

  completeTask(task: Task): void {
    task.completed = true;
  }

  unCompleteTask(task: Task): void {
    task.completed = false;
  }

}
