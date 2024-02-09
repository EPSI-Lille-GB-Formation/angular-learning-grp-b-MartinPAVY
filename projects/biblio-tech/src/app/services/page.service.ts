import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, of, tap, Observable, map} from 'rxjs';
import {Page} from "./Entity/page";
import {Book} from "./Entity/book";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pagesUrl: string = 'api/pages';

  constructor(
    private http: HttpClient
  ) {
  }

  getPagesList(): Observable<Page[]> {
    return this.http.get<Page[]>(this.pagesUrl).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  getPagesByBookId(bookId: number): Observable<Page[]> {
    return this.http.get<Page[]>(`${this.pagesUrl}?bookId=${bookId}`).pipe(
      catchError(error => {
        console.error('PageService - Erreur lors de la récupération des pages :', error);
        throw error;
      })
    );
  }

  createPage(page: Page): Observable<any> {
    return this.http.post<Book>(`${this.pagesUrl}/${page}`, page).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  updatePage(page: Page): Observable<any> {
    return this.http.post<Book>(`${this.pagesUrl}/${page}`, page).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  deletePage(pageId: number): Observable<any> {
    return this.http.delete<Book>(`${this.pagesUrl}/${pageId}`).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

}
