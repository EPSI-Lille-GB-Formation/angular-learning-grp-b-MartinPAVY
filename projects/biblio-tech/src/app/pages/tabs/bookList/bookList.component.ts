//bookList.component.ts
import {CommonModule, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {BookComponent} from "../../../Components/book/book.component";
import {Book} from "../../../services/Entity/book";
import {BOOKS} from "../../../services/Mocks/mock-books";
import {BookService} from "../../../services/book.service";
import {BorderHighlightDirective} from "../../../../../border-highlight.directive";
import {Router, RouterLink} from '@angular/router';
import {LocalStorageService} from "../../../services/Storage/local-storage.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../../services/Entity/user";
import {FormsModule} from '@angular/forms';
import {USERS} from "../../../services/Mocks/mock-users";

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [
    CommonModule, BorderHighlightDirective, BookComponent, RouterLink, FormsModule, NgIf,
  ],
  templateUrl: './bookList.component.html',
  styleUrl: './bookList.component.css'
})
export class BookListComponent {
  public currentDate: Date = new Date();
  public id: number = this.currentDate.getTime();

  bookList: any[] = [];
  searchText: string = '';
  isLogged: boolean = false;
  isCreating: boolean = false;
  userEmail: string = '';
  createdBook: Book = {
    id: this.id,
    title: '',
    resume: '',
    categoryId: 1,
    authorEmail: this.userEmail,
    image: '',
    createdAt: this.currentDate,
    updatedAt: this.currentDate
  };

  constructor(
    private bookService: BookService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.bookService.getBookList().subscribe(books => this.bookList = books)
    this.isLogged = this.localStorageService.getData('isLogged')
    this.userEmail = this.localStorageService.getData('userEmail')

  }

  searchBooks(): void {
    if (this.searchText && this.isLogged) {
      this.bookService.searchBooksByTitle(this.searchText)
        .subscribe((data: Book[]) => {
          this.bookList = data.map(book => {
            const author = USERS.find(user => user.email === book.authorEmail);
            return {
              ...book,
              authorName: author ? `${author.firstName} ${author.lastName}` : 'Auteur inconnu'
            };
          });
        }, error => {
          console.error('There was an error!', error);
        });
    } else if (this.searchText && !this.isLogged) {
      alert('vous deves être connectés pour rechercher des livres')
    }
  }

  createBook() {
    if (this.userEmail = '') {
      window.alert('Votre connexion a expirée, vous devez vous reconnecter');
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000);

    } else {
      this.bookService.createBook(this.createdBook).subscribe({
        next: (user) => {
          alert("Le livre a correctement été créé");
          setTimeout(() => {
            this.createStatus()
          }, 1000)
        }, error: (error) => {
          console.error("error", error)
          alert("Une erreur s'est produite");
        }
      })

    }
  }

  createStatus() {
    this.isCreating = !this.isCreating
  }


  protected readonly navigator = navigator;
}
