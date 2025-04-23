import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[appFitText]',
  standalone: true,
})
export class FitTextDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    this.resizeText()
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeText()
  }

  private resizeText() {
    const element = this.el.nativeElement
    const parent = element.parentElement
    const containerWidth = parent.offsetWidth

    let fontSize = 1
    this.renderer.setStyle(element, 'white-space', 'nowrap')

    while (true) {
      this.renderer.setStyle(element, 'font-size', `${fontSize}px`)

      if (element.scrollWidth > containerWidth) {
        fontSize--
        break
      }

      fontSize++
    }

    this.renderer.setStyle(element, 'font-size', `${fontSize}px`)
  }
}
