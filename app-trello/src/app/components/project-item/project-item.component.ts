import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/Models/project';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input()
  project: Project;

  @Output()
  projectSelected = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editProject(project: Project): void {
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '100%',
      autoFocus: false,
      hasBackdrop: true,
      id: 'editProjectDialog',
      data: project.id});

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res === 'delete') {
          this.projectSelected.emit(project.id);
        }
      }
    });
  }

  deleteTask(deleteId: number): void {
    const index = this.project.tasks.findIndex(element => element.id === deleteId);
    this.project.tasks.splice(index, 1);
  }
}
