import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './repo-list.component';
import { RepoDetailsComponent } from './repo-details.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    RepoListComponent,
    RepoDetailsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {path:'repos', component:  RepoListComponent},
      {path: 'repos/:id', component: RepoDetailsComponent}
    ])
  ]
})
export class ReposModule { }
