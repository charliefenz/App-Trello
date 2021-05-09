import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/project';
import { Task } from 'src/app/Models/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

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

  createTask(): void {
    this.newTaskValue == null ? this.newTaskValue = 'Tarea sin nombre' : this.newTaskValue = this.newTaskValue;
    const task: Task = {
      id: this.addTaskId(),
      name: this.newTaskValue,
      priority: 1,
      creationDate: new Date(),
      dueDate: new Date(),
      completed: false
    };
    this.project.tasks.push(task);
    this.newTaskValue = null;
    this.newTaskFocused = false;
    this.newTaskPlaceholder = 'Agregar una nueva tarea...';
    console.log(task);
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
