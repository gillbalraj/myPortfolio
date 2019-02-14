import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './my-skills/skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    MyProjectsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
