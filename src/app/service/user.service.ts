import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jsonUrl: string = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient, router: Router
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }
  getOne(id): Observable<User> {
    return this.http.get<User>(`${this.jsonUrl}/${id}`);
  }
  addnewUser(newData): Observable<User[]> {
    return this.http.post<User[]>(this.jsonUrl, newData);
  }

  removeUser(userID: number): Observable<User[]> {
    return this.http.delete<User[]>(`${this.jsonUrl}/${userID}`)
  }

  editUser(userID, editedData): Observable<User[]> {
    return this.http.put<User[]>(`${this.jsonUrl}/${userID}`, editedData);
  }
}
