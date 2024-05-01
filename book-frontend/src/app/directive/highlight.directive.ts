import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow'); // Change the background color to yellow
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Revert the background color to default
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
