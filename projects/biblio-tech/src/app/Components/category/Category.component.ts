import {Component, Input, OnInit} from '@angular/core';
import {BorderHighlightDirective} from "../../../../border-highlight.directive";
import {Router} from '@angular/router';
import {Category} from "../../services/Entity/category";
import {CategoryService} from "../../services/category.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'category',
  standalone: true,
  imports: [
    BorderHighlightDirective,
    NgIf
  ],
  templateUrl: './Category.component.html',
  styleUrl: './Category.component.css'
})
export class CategoryComponent implements OnInit {

  @Input("value")
  category!: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  onClickDelete(categoryId: number): void {
    if (this.category && categoryId) {
      this.categoryService.deleteCategory(categoryId).subscribe(
        () => {
          alert('Suppression confirmée')
        },
        error => {
          alert('une erreur est survenue')
        }
      );
    } else {
      alert('Une erreur est survenue')
      console.log('Unknown book')
    }
  }

  deleteCategory() {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre?')) {
      this.categoryService.deleteCategory(this.category.id).subscribe(() => {
        window.alert('Catégorie supprimée');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      });
    }
  }
}
