import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http: HttpClient) { }

  getRepo(id: string){
    return this.http.get(`https://api.github.com/repos/Eguchinedu/${id}/contents`)
  }

  getRepos(){
    return this.http.get('https://api.github.com/users/Eguchinedu/repos')
  }
}
