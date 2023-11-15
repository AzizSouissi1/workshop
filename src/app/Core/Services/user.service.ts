import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from 'src/app/Core/Models/user';

@Injectable()
export class UserService {

  URL = "http://localhost:3000/users"
  list: any;
  httpOtions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getAllusers() {
    return this.http.get<User[]>(this.URL);
  }
  getUserById(id: number) {
    return this.http.get<User>(`${this.URL}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching user by ID:', error);
        return throwError(error);
      })
    );
  }

  AddUser(u: User) {
    return this.http.post<User>(this.URL, u, this.httpOtions)

  }
  updateUser(u: User) {
    let id = u.id;
    return this.http.put(this.URL + '/' + id, u);

  }
  deleteUser(id: String) {
    let URL2 = this.URL + "/" + id;
    return this.http.delete<User>(URL2)
  }


}