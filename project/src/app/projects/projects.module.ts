import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsRoutingModule, routedComponents } from './projects-routing.module';
import { ProjectListComponent } from "./project-list/project-list.component";


// import { ProjectsComponent } from './projects.component';
// import { ProjectListComponent } from './project-list/project-list.component';

// const routes: Routes = [
//   { path: '', component: ProjectsComponent, data: {title: 'Top Characters'} },
// ];
@NgModule({
  imports: [
    ProjectsRoutingModule
  ],
  // exports: [RouterModule],
  declarations: [routedComponents]
})
export class ProjectsModule { }
