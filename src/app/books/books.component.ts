import {Component, OnInit} from '@angular/core';

import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private service: BookService) {
  }

  getBooks(): void {
    this.service.getBooks().then(books => this.books = books);
  }

  deleteBook(book: Book): void {
    this.service.deleteBook(book.id).then(() => {
      this.books = this.books.filter(b => b !== book)
    });
  }

  ngOnInit() {
    this.getBooks();
  }
}
