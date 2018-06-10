import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    this.http.get('https://jsonplaceholder.typicode.com/users/'+ userId);
  }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
