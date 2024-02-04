import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appConteudo]'
})
export class ConteudoDirective {

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#0178fc';
    this.element.nativeElement.style.color = '#faf9ee';
    // this.element.nativeElement.style.border.radius ='5px';
    // this.element.nativeElement.style.padding = '5px';
  }

}
