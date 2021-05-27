import { Directive,  ElementRef } from '@angular/core';

@Directive({
  selector: '[note]'
})
export class NoteDirective {

   constructor(private elementRef:  ElementRef){
    this.elementRef.nativeElement.style.padding="10px";
    this.elementRef.nativeElement.style.fontSize="14px";
    this.elementRef.nativeElement.style.background="blue";
    this.elementRef.nativeElement.style.color="white";

   }

}
