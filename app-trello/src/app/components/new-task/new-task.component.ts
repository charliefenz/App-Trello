import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/project';
import { Task } from 'src/app/Models/task';
import { TaskService } from 'src/app/services/task.service';

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

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  newTaskFocus(): void {
    this.newTaskPlaceholder = '';
    this.newTaskFocused = true;
 }

  createTask(): void {
    this.newTaskValue == null ? this.newTaskValue = 'Tarea sin nombre' : this.newTaskValue = this.newTaskValue;
    this.taskService.createTask(this.project.id, this.newTaskValue);
    this.newTaskValue = null;
    this.newTaskFocused = false;
    this.newTaskPlaceholder = 'Agregar una nueva tarea...';
  }

}
