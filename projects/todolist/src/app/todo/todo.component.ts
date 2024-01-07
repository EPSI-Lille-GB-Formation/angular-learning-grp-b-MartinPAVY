import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {BorderHighlightDirective} from "../../../border-highlight.directive";
import {Todo} from "../todo";

@Component({
  selector: 'todo',
  standalone: true,
    imports: [
        CommonModule, BorderHighlightDirective, NgIf
    ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Input("value")
  todo: Todo | undefined;

}
