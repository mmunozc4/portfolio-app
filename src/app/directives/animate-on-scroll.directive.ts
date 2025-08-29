import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements AfterViewInit {

  @Input('appAnimate') animationName: string = 'fadeInUp';
  @Input() delay: string = '0s';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');

          this.renderer.setStyle(this.el.nativeElement, 'animation-delay', this.delay);

          this.renderer.addClass(this.el.nativeElement, 'animate__animated');
          this.renderer.addClass(this.el.nativeElement, `animate__${this.animationName}`);

          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.el.nativeElement);
  }
}
