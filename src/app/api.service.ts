import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://jsonplaceholder.typicode.com/users')
        .subscribe((success) => {
          resolve(success);
        });
    });
  }

  getResData() {
    return this.http.get('https://reqres.in/api/users');
  }
}
