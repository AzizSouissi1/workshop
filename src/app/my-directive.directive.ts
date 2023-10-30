import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private _el:ElementRef) {
    this._el.nativeElement.style.color='black';

   }

   @HostListener('mouseenter')onMouseEnter(){
    this._el.nativeElement.style.color='blue';
    this._el.nativeElement.style.background='yellow';
   }
   @HostListener('mouseleave')onMouseLeave(){
    this._el.nativeElement.style.color='white';
    this._el.nativeElement.style.background='black';
   }
}
