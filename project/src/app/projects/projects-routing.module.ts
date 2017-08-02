import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CharacterListComponent } from './character-list/character-list.component';
import { ProjectsComponent } from './projects.component';
// import { CharactersComponent } from './characters.component';
// import { CanDeactivateGuard } from '../core';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        component: ProjectListComponent,
      },
      // {
      //   path: ':id',
      //   comProjects,
      //   canDeactivate: [CanDeactivateGuard]
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }

export const routedComponents = [ProjectsComponent, 
  ProjectListComponent, 
  // CharacterComponent
];
