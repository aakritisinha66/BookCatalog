import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string|null {
    if (!value) { return null; }
    return value.replace(/\b\w/g, (ch)=>ch.toUpperCase())
  }

}
