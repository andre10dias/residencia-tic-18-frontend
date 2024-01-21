import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulo]'
})
export class TituloDirective {

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#ff6347';
    this.element.nativeElement.style.color = '#faf9ee';
    // this.element.nativeElement.style.border.radius ='5px';
    // this.element.nativeElement.style.padding = '5px';
  }

}
