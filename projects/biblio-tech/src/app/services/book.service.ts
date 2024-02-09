import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, of, tap, Observable, map} from 'rxjs';
import {Book} from "./Entity/book";


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

  createBook(book: Book): Observable<any> {
    return this.http.post<Book>(`${this.booksUrl}/${book}`, book).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put<Book>(`${this.booksUrl}/${book.id}`, book).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  deleteBook(bookId: number): Observable<any> {
    return this.http.delete<Book>(`${this.booksUrl}/${bookId}`).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  searchBooksByTitle(title: string): Observable<Book[]> {
    return this.getBookList().pipe(
      map(books => books.filter(book => book.title.toLowerCase().includes(title.toLowerCase())))
    );
  }
}
