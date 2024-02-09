import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {User} from "./Entity/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(
    private http: HttpClient
  ) {
  }


  getAllUsers(currentUserEmail: string): Observable<User[]> {
    if (!this.isAdmin(currentUserEmail)) {
      return throwError(() => new Error('Unauthorized'));
    }
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
  }

  createUserByAdmin(user: User, currentUserEmail: string): Observable<User> {
    if (!this.isAdmin(currentUserEmail)) {
      return throwError(() => new Error('Unauthorised'));
    }
    return this.http.post<User>(this.usersUrl, user);
  }

  updateUser(user: User, currentUserEmail: string): Observable<User> {
    if (!this.isAdmin(currentUserEmail) && user.email !== currentUserEmail) {
      return throwError(() => new Error('Unauthorized'));
    }
    return this.http.put<User>(`${this.usersUrl}/${user.id}`, user);
  }

  deleteUser(id: number, currentUserEmail: string): Observable<User> {
    if (!this.isAdmin(currentUserEmail)) {
      return throwError(() => new Error('Unauthorized'));
    }
    return this.http.delete<User>(`${this.usersUrl}/${id}`);
  }

  private isAdmin(userEmail: string): boolean {
    const adminUsers: string[] = ['pavy.martin@gmail.com']
    return adminUsers.includes(userEmail)
  }

}
