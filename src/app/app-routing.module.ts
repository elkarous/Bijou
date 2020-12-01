import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {route} from "./routes/routes";



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
