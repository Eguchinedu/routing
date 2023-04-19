import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get('https://api.github.com/users/Eguchinedu')
  }
}
