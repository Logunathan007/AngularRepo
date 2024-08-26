import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { WrongRouterComponent } from './wrong-router/wrong-router.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { DynamicContactComponent } from './dynamic-contact/dynamic-contact.component';
import { loginGuard } from './guards/login.guard';
import { resole } from './guards/resolve.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },{
    path:'project',
    component:ProjectComponent,
    children:[
      {
        path:'project1',
        component:Project1Component,
        canActivate:[loginGuard],
      },{
        path:'project2',
        component:Project2Component,
      }
    ]
  },
  {
    path:'experience',
    component:ExperienceComponent,
    resolve:{data:resole}
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
      path:'contact/:id/:name',
      component:DynamicContactComponent,
  },
  {
    path:'module1',
    loadChildren:()=>import('./module1/module1.module').then(m=>m.Module1Module)
  },
  {
    path:'module2',
    loadChildren:()=>import('./module2/module2.module').then(m=>m.Module2Module)
  },
  {
    path:'**',
    component:WrongRouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
