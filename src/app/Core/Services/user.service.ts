
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  getUserById(id: number) { }
  AddUser(u: User) {
    return this.http.post<User>(this.URL, u, this.httpOtions)

  }
  updateUser(id: Number, u: User) { }
  deleteUser(id: String) {
    let URL2 = this.URL + "/" + id;
    return this.http.delete<User>(URL2)
  }


}
