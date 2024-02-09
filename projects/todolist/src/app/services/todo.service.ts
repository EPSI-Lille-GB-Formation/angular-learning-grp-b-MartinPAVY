import {Injectable} from '@angular/core';
import {Todo} from "../todo";
import {HttpClient} from '@angular/common/http'
import {catchError, of, tap, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: string = 'api/todos';

  constructor(
    private http: HttpClient
  ) {
  }

  getTodoList() {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap(todoList => console.log(todoList)),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    )
  }

  getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.todosUrl}/${todoId}`).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

  deleteTodoById(todoId: number): Observable<any> {
    const url = `${this.todosUrl}/${todoId}`;
    return this.http.delete(url).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    );
  }

}
