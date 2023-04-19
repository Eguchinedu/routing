import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GitProfileComponent } from './home/git-profile.component';
import { PageNotFoundComponent } from './page-not-found.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: GitProfileComponent},
      {path:'', redirectTo:'home', pathMatch: 'full'},
      {path:'**', component: PageNotFoundComponent}
    ])
  ],
  exports: [
RouterModule
  ]
})
export class AppRoutingModule { }
