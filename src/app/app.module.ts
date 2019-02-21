import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './my-skills/skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { RoutingModule } from './routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyTechListComponent } from './my-tech-list/my-tech-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    MyProjectsComponent,
    DashboardComponent,
    MyTechListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RoutingModule,
    NoopAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
