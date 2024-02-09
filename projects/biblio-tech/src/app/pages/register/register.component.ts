import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {USERS} from "../../services/Mocks/mock-users";
import {UserService} from "../../services/user.service";
import {User} from "../../services/Entity/user";
import {LocalStorageService} from "../../services/Storage/local-storage.service";

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
  public currentDate: Date = new Date();
  public id: number = this.currentDate.getTime();

  user: User = {
    id: this.id,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 2
  };
  public passwordVerif = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {
  }

  onSubmit() {
    const userAlreadyExists = USERS.find(u => u.email === this.user.email);
    const validUser = this.user.email && this.user.password == this.passwordVerif;

    if (!this.user.password || !this.passwordVerif || !validUser) {
      alert('Les informations sont erronées');
      console.log(this.user)
      console.log(validUser)
    } else if (userAlreadyExists) {
      alert('Un utilisateur existe déjà avec cette adresse mail')
    } else if (!this.isPasswordSecure(this.user.password)) {
      alert('Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre minuscule, une majuscule, un chiffre et un caractère spécial.');
    } else if (validUser) {
      this.localStorageService.setData('isLogged', true);
      this.localStorageService.setData('user', this.user);
      this.localStorageService.setData('userEmail', this.user.email);
      this.localStorageService.setData('isAdmin', false);
      this.userService.createUser(this.user).subscribe({
        next: (user) => {
          this.router.navigate(['/'])
        }, error: (error) => {
          console.error("error", error)
          alert("Une erreur s'est produite");
        }
      })
    }
  }

  onLogin() {
    this.router.navigate(['/login'])
  }

  isPasswordSecure(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
}
