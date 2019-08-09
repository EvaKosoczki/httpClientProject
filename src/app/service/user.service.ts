import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jsonUrl: string = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }
  getOne(id): Observable<User[]> {
    return this.http.get<User[]>(`${this.jsonUrl}/${id}`);
  }
  addnewUser(newData): Observable<User[]> {
    return this.http.post<User[]>(this.jsonUrl, newData);
  }

  removeUser(userID: number): Observable<User[]> {
    return this.http.delete<User[]>(`${this.jsonUrl}/${userID}`)
  }
}
