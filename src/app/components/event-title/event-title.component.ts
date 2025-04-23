import { Component } from '@angular/core'
import { CountdownStateService } from '../../services/countdown-state.service'
import { FitTextDirective } from '../../directives/fit-text.directive'

@Component({
  selector: 'app-event-title',
  templateUrl: './event-title.component.html',
  styleUrl: './event-title.component.scss',
  imports: [FitTextDirective],
})
export class EventTitleComponent {
  constructor(public countdown: CountdownStateService) {}
}
