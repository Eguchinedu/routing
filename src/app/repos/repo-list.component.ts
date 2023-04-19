import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service';

@Component({
  selector: 'cw-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit{
  repoList: any[] = [];
  p: number = 1;
  perPage:number = 6;
  totalRepos:any;
constructor(private http: HttpClient, private repoService: RepoService){

}
ngOnInit(): void {
  this.getRepoList()
}
getRepoList(){
 this.http.get(`https://api.github.com/users/Eguchinedu/repos`).subscribe((data: any) => {this.repoList = data;
this.totalRepos = data.length;
console.log(data.length);
})
}
}
