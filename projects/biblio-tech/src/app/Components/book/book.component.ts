//book.component.ts
import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {BorderHighlightDirective} from "../../../../border-highlight.directive";
import {Book} from "../../services/Entity/book";
import {BookService} from "../../services/book.service";
import {Router, RouterLink} from '@angular/router';
import {LocalStorageService} from "../../services/Storage/local-storage.service";

@Component({
  selector: 'book',
  standalone: true,
  imports: [
    CommonModule, BorderHighlightDirective, NgIf, RouterLink
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  isAdmin: boolean = false;
  isLogged: boolean = false;

  @Input("value")
  book: Book | undefined;
  @Input("author")
  author: String | undefined;

  constructor(
    private bookService: BookService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.isLogged = this.localStorageService.getData('isLogged')
  }

  goToBookDetails(bookId: any) {
    this.router.navigate(['/bookDetails', bookId])
  }

  onClickDelete(): void {
    if (this.book && this.book.id) {
      this.bookService.deleteBook(this.book?.id).subscribe(
        () => {
          console.log('Le livre a été supprimé')
        },
        error => {
          console.error('Error deleting book', error)
        }
      );
    } else {
      alert('Une erreur est survenue')
      console.log('Unknown book')
    }
  }

}
