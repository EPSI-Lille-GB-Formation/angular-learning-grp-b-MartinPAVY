import {Component, Input, OnInit} from '@angular/core';
import {BorderHighlightDirective} from "../../../../border-highlight.directive";
import {Router} from '@angular/router';
import {User} from "../../services/Entity/user";
import {UserService} from "../../services/user.service";
import {NgIf} from "@angular/common";
import {Category} from "../../services/Entity/category";
import {CategoryService} from "../../services/category.service";
import {LocalStorageService} from "../../services/Storage/local-storage.service";

@Component({
  selector: 'user',
  standalone: true,
  imports: [
    BorderHighlightDirective
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  currentUserEmail: string = '';

  @Input("value")
  user!: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.currentUserEmail = this.localStorage.getData('userEmail');
  }

  deleteUser(userId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre?')) {
      this.userService.deleteUser(userId, this.currentUserEmail).subscribe(() => {
        window.alert('User supprimé');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      });
    }
  }
}
