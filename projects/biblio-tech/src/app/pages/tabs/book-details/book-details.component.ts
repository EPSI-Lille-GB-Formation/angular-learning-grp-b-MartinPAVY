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
  book!: Book;
  isAuthor: boolean = false;
  isAdmin: boolean = false;
  isEditing: boolean = false;
  pageList: Page[] = [];

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

    if (USERS.find(user => user.email === this.book.authorEmail)) {
      console.log(this.isAuthor)
      this.isAuthor = true
    }

    console.log('initialization done')

  }

  fetchPages(bookId: number) {
    console.log('IsCalled')
    this.pageService.getPagesList().subscribe(pages => {
      console.log('isInFilter')
      this.pageList = pages.filter(page => page.bookId === bookId);
    });
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  editBook() {
    this.isEditing = !this.isEditing;
  }

  confirmEdit() {
    this.book.updatedAt = new Date();
    this.bookService.updateBook(this.book).subscribe(() => {
      this.isEditing = false; // Exit editing mode after successful update
    });
  }

  deleteBook() {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre?')) {
      this.bookService.deleteBook(this.book.id).subscribe(() => {
        window.alert('Livre supprimé');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000); // Redirect after 1 second
      });
    }
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

}
