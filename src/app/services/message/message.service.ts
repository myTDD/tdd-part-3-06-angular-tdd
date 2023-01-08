import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  constructor(private http: HttpClient) {}
  //constructor() {}

  // getMessages() {
  //   return [];
  // }

  // getMessages(): Observable<any> {
  //   return of([]);
  // }

  // getMessages(): Observable<any> {
  //   return of([
  //     { userId: 1, id: 1, title: 'title 1', body: 'body 1' },
  //     { userId: 2, id: 2, title: 'title 2', body: 'body 2' },
  //     { userId: 3, id: 3, title: 'title 3', body: 'body 3' }
  //   ]);
  // }

  getMessages(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
