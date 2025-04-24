import { Component, ElementRef, ViewChild } from '@angular/core'

import { CountdownStateService } from '../../services/countdown-state.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-countdown-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @ViewChild('dateInput', { static: true })
  dateInput!: ElementRef<HTMLInputElement>
  constructor(public countdown: CountdownStateService) {}

  get minDate() {
    return new Date().toISOString().slice(0, 16)
  }

  openPicker() {
    const input = this.dateInput.nativeElement
    if (typeof input.showPicker === 'function') {
      input.showPicker()
    } else {
      input.focus()
    }
  }
}
