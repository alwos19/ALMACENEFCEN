//Angular Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Modules
import { SharedRoutingModule } from './shared-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgbModule,
  ],
})
export class SharedModule {}
