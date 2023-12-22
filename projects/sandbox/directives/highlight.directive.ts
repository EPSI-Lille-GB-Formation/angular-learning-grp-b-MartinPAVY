import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {



  @HostBinding('style.backgroundColor')
  bgColor = 'transparant';

  @Input('bg-color')
  bgColorHover = 'yellow';

  @Input('bg-defaukt')
  bgDefault = 'green';


  constructor() { }

  ngAfterViewInit()
  {
    this.bgColor = this.bgDefault
  }

  @HostListener('mouseenter')
    onMouseEnter(){
    this.bgColor = this.bgColorHover;
  }

  @HostListener('mouseleave')
  onmouseleave(){
    this.bgColor = this.bgDefault;
  }

}
