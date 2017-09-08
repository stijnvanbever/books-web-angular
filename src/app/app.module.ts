import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {BooksInMemoryService} from './books-in-memory.service';
import {BookService} from './book.service';
import { NewBookComponent } from './new-book/new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NewBookComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    // InMemoryWebApiModule.forRoot(BooksInMemoryService),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
