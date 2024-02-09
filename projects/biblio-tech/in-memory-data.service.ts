import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import {BOOKS} from "./src/app/services/Mocks/mock-books";
import {USERS} from "./src/app/services/Mocks/mock-users";
import {CATEGORIES} from "./src/app/services/Mocks/mock-categories";
import {PAGES} from "./src/app/services/Mocks/mock-pages";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = BOOKS;
    const users = USERS;
    const categories = CATEGORIES;
    const pages = PAGES;

    return {books, users, categories, pages};
  }
}
