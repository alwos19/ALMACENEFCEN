//ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//CREATE COMPONENT
import { CreateComponent } from './create.component';




const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
    children: [
     
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'prefix',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoutingModule { }
