//login-page.component.ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../../services/user.service";
import {USERS} from "../../services/Mocks/mock-users";
import {LocalStorageService} from "../../services/Storage/local-storage.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {
  }

  onSubmit() {
    const validUser = USERS.find(u => u.email === this.user.email && u.password === this.user.password);
    const isAdmin = USERS.find(u => u.email === this.user.email && u.role === 1);
    if (validUser) {
      if (isAdmin) {
        this.localStorageService.setData('isAdmin', true);
      } else {
        this.localStorageService.setData('isAdmin', false);
      }
      this.localStorageService.setData('isLogged', true);
      this.localStorageService.setData('user', this.user);
      this.localStorageService.setData('userEmail', this.user.email);
      this.router.navigate(['/'])
    } else {
      // Sinon, affiche une alerte ou une notification
      alert('Identifiants incorrects');
    }
  }

  onRegister() {
    this.router.navigate(['/register'])
  }
}
