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
  @Input() triggerFit: any

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone,
  ) {}

  ngAfterViewInit() {
    this.runResizeOutsideAngular()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['triggerFit']) {
      this.runResizeOutsideAngular()
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.runResizeOutsideAngular()
  }

  private runResizeOutsideAngular() {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => this.resizeText())
    })
  }

  public resizeText() {
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
