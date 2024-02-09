import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {LocalStorageService} from "../../../services/Storage/local-storage.service";
import {CategoryService} from "../../../services/category.service";
import {CategoryComponent} from "../../../Components/category/Category.component";
import {UserService} from "../../../services/user.service";
import {UserComponent} from "../../../Components/user/user.component";

@Component({
  selector: 'profile-page',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    CategoryComponent,
    UserComponent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  isEditing: boolean = false;
  isCreatingCategories: boolean = false;
  isLogged: boolean = false;
  isAdmin: boolean = false;
  sameId: boolean = true;
  categories: any[] = [];
  users: any[] = [];
  userEmail: string = '';
  user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    role: 2
  };
  category = {
    id: 10,
    label: '',
  };

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private categoryService: CategoryService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.isLogged = this.localStorageService.getData('isLogged')
    this.isAdmin = this.localStorageService.getData('isAdmin')
    this.userEmail = this.localStorageService.getData('userEmail')
    this.user = this.localStorageService.getData('user')
    this.categoryService.getCategorieList().subscribe(categories => this.categories = categories);
    this.userService.getAllUsers('pavy.martin@gmail.com').subscribe(users => this.users = users);
  }


  deleteCategories(categoryId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie?')) {
      this.categoryService.deleteCategory(categoryId).subscribe(() => {
        window.alert('Catégorie supprimée');
      });
    }
  }

  isCreating() {
    this.isCreatingCategories = !this.isCreatingCategories;
  }

  createCategories() {
    const idAlreadyExist = this.categoryService.getCategoryById(this.category.id).subscribe(category => {
      if (category) {
        return true
      } else return false
    });

    const labelAlreadyExist = this.categoryService.getCategoryByLabel(this.category.label).subscribe(category => {
      if (category) {
        return true
      } else return false
    });


    if (idAlreadyExist) {
      alert('Id déjà utilisé')
    } else if (labelAlreadyExist) {
      alert('Label déjà utilisé');
    } else {
      this.categoryService.addCategory(this.category).subscribe({
        next: (user) => {
          this.router.navigate(['/'])
        }, error: (error) => {
          console.error("error", error)
          alert("Une erreur s'est produite");
        }
      })
    }
  }

  idAlreadyExist() {
    this.categoryService.getCategoryById(this.category.id).subscribe(category => {
      if (category) {
        this.sameId = true
      } else this.sameId = false
    });
  }

  editUser() {
    this.isEditing = !this.isEditing
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onLogout() {
    this.goToLogin()
    this.localStorageService.setData('user', []);
    this.localStorageService.setData('isAdmin', false);
    this.localStorageService.setData('isLogged', false);
  }
}
