import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {



  constructor(private _elementRef : ElementRef, private _rendere : Renderer) { 
    //console.log(this._elementRef.nativeElement);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._rendere.setElementStyle(
      this._elementRef.nativeElement, 
      'background-color',
      'yellow'
    );
  }

}
