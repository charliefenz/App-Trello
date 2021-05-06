import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/project';
import { Task } from 'src/app/Models/task';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { formatDate } from '@angular/common';

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

  constructor(public dialog: MatDialog) { }

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
    console.log(task);
  }

  completeTask(task: Task): void {
    task.completed = true;
  }

  unCompleteTask(task: Task): void {
    task.completed = false;
  }

  editProject(project: Project): void {
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '100%',
      autoFocus: false,
      hasBackdrop: true,
      id: 'editProjectDialog',
      data: project});
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      autoFocus: false,
      hasBackdrop: true,
      id: 'editTaskDialog',
      data: task});
  }
}
