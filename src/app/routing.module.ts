import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{path: 'projects', component: MyProjectsComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: '', redirectTo: '/dashboard' , pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class RoutingModule { }
	