import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http: HttpClient) { }

  getRepo(id: string){
    return this.http.get(`https://api.github.com/repos/Eguchinedu/${id}/contents`)
  }
}
