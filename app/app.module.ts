import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, HttpModule, ReactiveFormsModule],
  declarations: [ AppComponent, routedComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
