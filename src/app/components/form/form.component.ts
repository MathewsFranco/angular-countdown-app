import { Component } from '@angular/core'
import { CountdownStateService } from '../../services/countdown-state.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-countdown-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  constructor(public countdown: CountdownStateService) {}

  get minDate() {
    return new Date().toISOString().slice(0, 16)
  }
}
