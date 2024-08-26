import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main2Component } from './main2/main2.component';
import { RouterModule, Routes } from '@angular/router';

const router:Routes = [
  {
    path:'',
    component:Main2Component
  }
]

@NgModule({
  declarations: [
    Main2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports:[
    Main2Component
  ]
})
export class Module2Module { }
