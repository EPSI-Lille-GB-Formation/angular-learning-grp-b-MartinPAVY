import {Component, Input} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {BorderHighlightDirective} from "../../../../../../todolist/border-highlight.directive";
import {Book} from "../../../book";
import {BookService} from "../../../services/book.service";
import {Router} from '@angular/router';

@Component({
  selector: 'book',
  standalone: true,
  imports: [
    CommonModule, BorderHighlightDirective, NgIf
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  @Input("value")
  book: Book | undefined;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  goToBookDetails(bookId: any) {
    this.router.navigate(['/book', bookId])
  }

  onClickDelete(): void {
    if (this.book && this.book.id) {
      this.bookService.deleteBookById(this.book?.id).subscribe(
        () => {
          console.log('Deleted successfully')
        },
        error => {
          console.error('Error deleting todo', error)
        }
      );
    } else {
      alert('An error occured')
      console.log('Unknown book')
    }
  }

}
