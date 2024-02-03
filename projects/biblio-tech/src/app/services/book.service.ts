import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, of, tap, Observable} from 'rxjs';
import {Book} from "../book";


@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl: string = 'api/books';

  constructor(
    private http: HttpClient
  ) {
  }

  getBookList() {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      tap(bookList => console.log(bookList)),
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  getBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.booksUrl}/${bookId}`).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  deleteBookById(bookId: number): Observable<any> {
    return this.http.delete<Book>(`${this.booksUrl}/${bookId}`).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }
}
