import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmpleadoGuard } from 'src/app/core/guards/empleado.guard';
import { ProgramingListComponent } from './pages/programing-list/programing-list.component';


const routes: Routes = [
 
  {
    path: 'lista',
    // canActivate: [EmpleadoGuard],
    component: ProgramingListComponent
  },
  {
    path: 'crear', 
    loadChildren: () => import('./pages/create/create.module')
    .then(m => m.CreateModule) },
  // {
  //   path: 'ver', 
  //   loadChildren: () => import('./pages/view/view.module')
  //   .then(m => m.ViewModule) 
  // },
  
  // { 
  //   path: 'editar', 
  //   loadChildren: () => import('./pages/edit/edit.module')
  //   .then(m => m.EditModule) 
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramingRoutingModule { }
