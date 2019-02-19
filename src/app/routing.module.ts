import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard' , pathMatch: 'full'},
	{path: 'projects', component: MyProjectsComponent},
	{path: 'dashboard', component: DashboardComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class RoutingModule { }
