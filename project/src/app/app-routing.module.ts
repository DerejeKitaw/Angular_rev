import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const ROUTES: Routes = [
  { path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule' },
  { path: 'pvdesign', loadChildren: 'app/pvdesign/pvdesign.module#PvdesignModule' },
  { path: '', pathMatch: 'full', redirectTo: 'projects', },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES,{ preloadingStrategy: PreloadAllModules })
    // CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
