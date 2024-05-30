//angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmpleadoGuard } from './core/guards/empleado.guard';

const ROUTES: Routes = [
  // {
  //   path: 'usuarios',
  //   canActivate: [EmpleadoGuard],
  //   loadChildren: () =>
  //     import('./modules/users/users.module').then((m) => m.UsersModule),
  // },
  {
    path: 'programacion de aulas',
    // canActivate: [EmpleadoGuard],
    loadChildren: () =>
      import('./modules/programing-room/programing.module').then(
        (m) => m.ProgramingModule
      ),
  },
  // {
  //   path: 'confirmaciones',
  //   loadChildren: () =>
  //     import('./modules/confirmations/confirmations.module').then((m) => m.ConfirmationsModule)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./modules/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: '',
  //   canActivate: [EmpleadoGuard],
  //   loadChildren: () =>
  //     import('./modules/home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
