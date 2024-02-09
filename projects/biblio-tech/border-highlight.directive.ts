import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[border-highlight]',
  standalone: true
})
export class BorderHighlightDirective {

  @HostBinding('style.borderSize')
  defaultBorderSize = "3px";

  @HostBinding('style.borderColor')
  defaultBorderColor = "transparent";

  @HostBinding('style.borderStyle')
  defaultBorderStyle = "solid";

  constructor() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.defaultBorderColor = "#1095C1"
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.defaultBorderColor = "transparent"
  }

}
