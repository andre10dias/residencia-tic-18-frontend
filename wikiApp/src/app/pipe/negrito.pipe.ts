import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negrito'
})
export class NegritoPipe implements PipeTransform {
  transform(value: string): string {
    return `<strong>${value}</strong>`;
  }
}
