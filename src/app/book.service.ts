import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Book} from './book';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
  private booksUrl = 'http://localhost:8080/api/book';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getBooks(): Promise<Book[]> {
    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => {
        return response.json() as Book[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  createBook(title: string, author: string): Promise<Book> {
    let book = {title: title, author: author};
    return this.http.post(this.booksUrl, JSON.stringify(book),
      {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Book)
      .catch(this.handleError);
  }

  deleteBook(id: number): Promise<void> {
    const url = `${this.booksUrl}/${id}`
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
