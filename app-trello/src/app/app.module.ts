import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/layout/main/main.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { registerLocaleData } from '@angular/common';
import LocaleEs from '@angular/common/locales/es-AR';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

registerLocaleData(LocaleEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NewProjectComponent,
    MainComponent,
    ProjectItemComponent,
    ProjectListComponent,
    HeaderComponent,
    EditProjectComponent,
    EditTaskComponent,
    TaskItemComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
