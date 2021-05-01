import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  test = '';
  constructor() { }

  ngOnInit(): void {
  }

  createProject(projectForm: NgForm): void {
    console.log(projectForm.form.value.title);
  }

}
