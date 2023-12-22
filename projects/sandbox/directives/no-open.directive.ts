import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[no-open]',
  standalone: true
})
export class NoOpenDirective {

  constructor() { }

  @HostListener('click')
  onClick(){
    return false
    console.log('do not click')
  }

}
