import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectsComponent } from './my-projects/my-projects.component'

const routes: Routes = [
	{path: 'projects', component: MyProjectsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class RoutingModule { }
