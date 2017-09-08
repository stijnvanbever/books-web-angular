import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private service: BookService) {
  }

  add(title: string, author: string): void {
    title = title.trim();
    author = author.trim();

    if (!title && !author) {
      return;
    }

    this.service.createBook(title, author);
  }

  ngOnInit() {
  }
}
