//angular
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routing
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


import { registerLocaleData } from '@angular/common';
import {LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
