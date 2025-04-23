import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[appFitText]',
  standalone: true,
})
export class FitTextDirective implements AfterViewInit {
  @Input() maxFontSize?: number

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    this.resizeText()
    this.renderer.setStyle(this.el.nativeElement, 'color', 'magenta')
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

      // If a maxFontSize is provided and we hit it, stop
      if (this.maxFontSize && fontSize >= this.maxFontSize) {
        break
      }

      fontSize++
    }

    this.renderer.setStyle(element, 'font-size', `${fontSize}px`)
  }
}
