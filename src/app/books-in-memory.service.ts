import {InMemoryDbService} from 'angular-in-memory-web-api';

export class BooksInMemoryService implements InMemoryDbService {
  createDb() {
    const books = [
      {id: 1, title: 'Harry Potter', author: 'J.K.Rowling'},
      {id: 2, title: 'Mistborn', author: 'Brandon Sanderson'},
      {id: 3, title: 'Cool Stuff', author: 'Stijn'}
    ];

    return {books};
  }
}
