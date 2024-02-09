import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from "./Entity/category";
import {catchError, of, tap, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'api/categories';

  constructor(
    private http: HttpClient
  ) {
  }

  getCategorieList() {
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
      tap(bookList => console.log(bookList)),
      catchError(error => {
        console.log(error);
        return of();
      })
    );
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.categoriesUrl}/${id}`);
  }

  getCategoryByLabel(label: string): Observable<Category> {
    return this.http.get<Category>(`${this.categoriesUrl}/${label}`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.categoriesUrl}/${category.id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.categoriesUrl}/${id}`);
  }

}
