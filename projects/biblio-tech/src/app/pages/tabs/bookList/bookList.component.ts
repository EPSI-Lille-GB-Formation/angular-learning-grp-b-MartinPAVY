import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {BorderHighlightDirective} from "../../../../../../todolist/border-highlight.directive";
import {BookComponent} from "../book/book.component";
import {Book} from "../../../book";
import {BOOKS} from "../../../mock-books";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [
    CommonModule, BorderHighlightDirective, BookComponent
  ],
  templateUrl: './bookList.component.html',
  styleUrl: './bookList.component.css'
})
export class BookListComponent {
  bookList: Book[] = BOOKS;

  isNovel: boolean = true;
  isRoman: boolean = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBookList().subscribe(books => this.bookList = books)
    this.bookService.getBookById(5).subscribe(book => console.log(book))
  }

  showNovels(): void {
    this.isNovel = true;
    this.isRoman = false;
  }

  showRomans(): void {
    this.isNovel = false;
    this.isRoman = true;
  }

  onClickShowEverything(): void {
    this.isNovel = true;
    this.isRoman = true;
  }


}
