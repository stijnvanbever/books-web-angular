import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Book} from './book';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
  private booksUrl = 'http://localhost:8080/api/books';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getBooks(): Promise<Book[]> {
    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json().data as Book[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  createBook(title: string, author: string): Promise<Book> {
    return this.http.post(this.booksUrl, JSON.stringify({title: title, author: author}),
      {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Book)
      .catch(this.handleError);
  }
}
