//bookDetails.component.ts
import {Component, OnInit} from '@angular/core';
import {Book} from "../../../services/Entity/book";
import {BookService} from "../../../services/book.service";
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {LocalStorageService} from "../../../services/Storage/local-storage.service";
import {USERS} from "../../../services/Mocks/mock-users";
import {NgForOf, NgIf} from "@angular/common";
import {PageService} from "../../../services/page.service";
import {Page} from "../../../services/Entity/page";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  currentDate: Date = new Date();
  id: number = this.currentDate.getTime();
  book!: Book;
  isAuthor: boolean = false;
  isAdmin: boolean = false;
  isEditing: boolean = false;
  isAddingPage: boolean = false;
  pageList: Page[] = [];
  newPage: Page = {
    id: this.id,
    title: '',
    content: '',
    createdAt: this.currentDate,
    updatedAt: this.currentDate,
    bookId: 1
  }

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService,
    private pageService: PageService
  ) {
  }

  ngOnInit() {
    console.log('initialized')
    const bookId = +this.route.snapshot.params['id'];
    this.bookService.getBookById(+bookId).subscribe(bookDetails => this.book = bookDetails)
    this.isAdmin = this.localStorageService.getData('isAdmin')

    this.pageService.getPagesByBookId(bookId).subscribe(
      pages => {
        this.pageList = pages;
      },
      error => {
        console.error('Erreur lors de la récupération des pages :', error)
      }
    )

    if (USERS.find(user => user.email === this.book.authorEmail)) {
      this.isAuthor = true
    }


    console.log('initialization done')

  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  editBook() {
    this.isEditing = !this.isEditing;
  }

  addPages() {
    this.isAddingPage = !this.isAddingPage;
  }

  confirmEdit() {
    this.book.updatedAt = new Date();
    this.bookService.updateBook(this.book).subscribe(() => {
      this.isEditing = false;
    });
  }

  deleteBook() {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre?')) {
      this.bookService.deleteBook(this.book.id).subscribe(() => {
        window.alert('Livre supprimé');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
      });
    }
  }

  deletePage(pageId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette page?')) {
      this.pageService.deletePage(pageId).subscribe(() => {
        window.alert('Page supprimée');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
      });
    }
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  confirmAddPage() {
    console.log('1')
    if (this.newPage.id === this.book.id) {

      console.log('2')
      this.pageService.createPage(this.newPage).subscribe({


        next: () => {
          alert("La page a correctement été créée");
          setTimeout(() => {
            this.router.navigate(['']);
            this.addPages()
          }, 1000)
        }, error: (error) => {
          console.error("error", error)
          alert("Une erreur s'est produite");
        }
      })
    } else {

      console.log('4')
      this.newPage.id = this.book.id
      this.pageService.createPage(this.newPage).subscribe({
        next: (user) => {
          alert("La page a correctement été créée");
          setTimeout(() => {
            this.isAddingPage = false;
          }, 1000)
        }, error: (error) => {
          console.error("error", error)
          alert("Une erreur s'est produite");
        }
      })
    }

  }

}
