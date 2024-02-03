import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login-page/login-page.component";
import {RegisterComponent} from "./pages/register/register.component";
import {BookListComponent} from "./pages/tabs/bookList/bookList.component";

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
    path: 'bookList',
    component: BookListComponent
  },
  {
    path: '',
    redirectTo: '/bookList',
    pathMatch: 'full'
  },];
