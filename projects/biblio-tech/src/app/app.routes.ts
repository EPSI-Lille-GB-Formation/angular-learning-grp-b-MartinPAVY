//app.routes.ts
import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login-page/login-page.component";
import {RegisterComponent} from "./pages/register/register.component";
import {BookListComponent} from "./pages/tabs/bookList/bookList.component";
import {BookDetailsComponent} from "./pages/tabs/book-details/book-details.component";
import {ProfilePageComponent} from "./pages/tabs/profile-page/profile-page.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'bookDetails/:id',
    component: BookDetailsComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
];
