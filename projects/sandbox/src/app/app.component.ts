import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HighlightDirective} from "../../directives/highlight.directive";
import {NoOpenDirective} from "../../directives/no-open.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, NoOpenDirective],
  template: `
  <h1>Coucou de sandbox, bisous mon pc est mort</h1>

  <a href="https://apple.com/fr/" target="_blank">Visit apple</a>

  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque tempor odio non gravida. Nulla eget eros eget velit maximus posuere. Ut volutpat urna eu augue posuere eleifend. Proin ac dolor non est viverra accumsan. Maecenas non bibendum purus. Proin at nunc scelerisque nibh vulputate eleifend quis vitae diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ante nisl, posuere vitae lacinia sit amet, sodales sed ante. Vestibulum tincidunt tincidunt sodales. Curabitur euismod orci velit, nec maximus mauris pretium non. Nullam finibus in elit eu convallis. Praesent semper ut lectus sit amet placerat. Vestibulum mollis sem risus, ut commodo elit ultrices ac. Aenean nisl urna, tincidunt in ullamcorper sed, laoreet ultricies lectus. Aenean vitae tincidunt erat.
  </p>
  <p highlight bg-color="yellow" bg-default="green">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque tempor odio non gravida. Nulla eget eros eget velit maximus posuere. Ut volutpat urna eu augue posuere eleifend. Proin ac dolor non est viverra accumsan. Maecenas non bibendum purus. Proin at nunc scelerisque nibh vulputate eleifend quis vitae diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ante nisl, posuere vitae lacinia sit amet, sodales sed ante. Vestibulum tincidunt tincidunt sodales. Curabitur euismod orci velit, nec maximus mauris pretium non. Nullam finibus in elit eu convallis. Praesent semper ut lectus sit amet placerat. Vestibulum mollis sem risus, ut commodo elit ultrices ac. Aenean nisl urna, tincidunt in ullamcorper sed, laoreet ultricies lectus. Aenean vitae tincidunt erat.
  </p>
  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque tempor odio non gravida. Nulla eget eros eget velit maximus posuere. Ut volutpat urna eu augue posuere eleifend. Proin ac dolor non est viverra accumsan. Maecenas non bibendum purus. Proin at nunc scelerisque nibh vulputate eleifend quis vitae diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ante nisl, posuere vitae lacinia sit amet, sodales sed ante. Vestibulum tincidunt tincidunt sodales. Curabitur euismod orci velit, nec maximus mauris pretium non. Nullam finibus in elit eu convallis. Praesent semper ut lectus sit amet placerat. Vestibulum mollis sem risus, ut commodo elit ultrices ac. Aenean nisl urna, tincidunt in ullamcorper sed, laoreet ultricies lectus. Aenean vitae tincidunt erat.
  </p>
  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque tempor odio non gravida. Nulla eget eros eget velit maximus posuere. Ut volutpat urna eu augue posuere eleifend. Proin ac dolor non est viverra accumsan. Maecenas non bibendum purus. Proin at nunc scelerisque nibh vulputate eleifend quis vitae diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ante nisl, posuere vitae lacinia sit amet, sodales sed ante. Vestibulum tincidunt tincidunt sodales. Curabitur euismod orci velit, nec maximus mauris pretium non. Nullam finibus in elit eu convallis. Praesent semper ut lectus sit amet placerat. Vestibulum mollis sem risus, ut commodo elit ultrices ac. Aenean nisl urna, tincidunt in ullamcorper sed, laoreet ultricies lectus. Aenean vitae tincidunt erat.
  </p>
  `,
  styles: []
})
export class AppComponent {}
