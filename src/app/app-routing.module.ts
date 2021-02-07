import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubJobsListComponent } from './components/github/github-jobs-list/github-jobs-list.component';

const routes: Routes = [
  { path: 'github-jobs', component: GithubJobsListComponent },
  { path: '**', component: AppComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
