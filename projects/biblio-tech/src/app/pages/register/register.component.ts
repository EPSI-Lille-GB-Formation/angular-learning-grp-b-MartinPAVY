import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  passwordVerif: string = '';

  constructor(private router: Router) {
  }

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.router.navigate(['/bookList'])
  }

  onLogin() {
    this.router.navigate(['/login'])
  }
}
