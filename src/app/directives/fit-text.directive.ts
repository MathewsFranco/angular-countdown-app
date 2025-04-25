import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core'

@Directive({
  selector: '[appFitText]',
  standalone: true,
})
export class FitTextDirective implements AfterViewInit, OnChanges {
  @Input() triggerFit: unknown

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone,
  ) {}

  ngAfterViewInit() {
    this.scheduleResize(true)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['triggerFit']) {
      this.scheduleResize()
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.scheduleResize()
  }

  private scheduleResize(doubleRaf = false) {
    this.ngZone.runOutsideAngular(() => {
      const raf = () => requestAnimationFrame(() => this.resizeText())
      doubleRaf ? requestAnimationFrame(() => raf()) : raf()
    })
  }

  private resizeText() {
    const el = this.el.nativeElement
    const containerWidth = el.parentElement.offsetWidth

    this.renderer.setStyle(el, 'white-space', 'nowrap')

    let fontSize = 1
    while (true) {
      this.renderer.setStyle(el, 'font-size', `${fontSize}px`)
      if (el.scrollWidth > containerWidth) {
        this.renderer.setStyle(el, 'font-size', `${fontSize - 1}px`)
        break
      }
      fontSize++
    }
  }
}
