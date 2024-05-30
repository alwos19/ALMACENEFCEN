import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramingRoutingModule } from './programing-routing.module';
import { ProgramingListComponent } from './pages/programing-list/programing-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProgramingListComponent
  ],
  imports: [
    CommonModule,
    ProgramingRoutingModule,
    SharedModule
  ]
})
export class ProgramingModule { }
