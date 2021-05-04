import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    NewProjectComponent,
    MainComponent,
    ProjectItemComponent,
    ProjectListComponent,
    HeaderComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
