import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main1Component } from './main1/main1.component';
import { RouterModule, Routes } from '@angular/router';
import { TierComponent } from './main1/tier/tier.component';
import { FeaturesComponent } from './main1/features/features.component';
import { BasicDetailsComponent } from './main1/basic-details/basic-details.component';
import { PreviewComponent } from './main1/preview/preview.component';

const router:Routes = [
  {
    path:'',
    component:Main1Component
  }
]

@NgModule({
  declarations: [
    Main1Component,
    TierComponent,
    FeaturesComponent,
    BasicDetailsComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class Module1Module { }
