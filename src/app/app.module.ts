import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { WrongRouterComponent } from './wrong-router/wrong-router.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { DynamicContactComponent } from './dynamic-contact/dynamic-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginConnectionService } from './services/login-connection.service';
import { HttpClientModule } from '@angular/common/http';
import { DolarDirective } from './directives/dolar.directive';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProjectComponent,
    ExperienceComponent,
    WrongRouterComponent,
    Project1Component,
    Project2Component,
    DynamicContactComponent,
    DolarDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  providers: [LoginConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
