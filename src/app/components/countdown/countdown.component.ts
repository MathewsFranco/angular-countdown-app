import { Component, computed, inject, signal } from '@angular/core'

import { CountdownStateService } from '../../services/countdown-state.service'
import { FitTextDirective } from '../../directives/fit-text.directive'

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  imports: [FitTextDirective],
})
export class CountdownComponent {
  countdown = inject(CountdownStateService)

  private now = signal(new Date())
  intervalId: ReturnType<typeof setInterval>

  timeLeft = computed(() => {
    const end = new Date(this.countdown.eventDate())
    const diff = end.getTime() - this.now().getTime()

    if (isNaN(end.getTime()) || diff <= 0) {
      return 'Event started or no date set'
    }

    const totalSeconds = Math.floor(diff / 1000)
    const days = Math.floor(totalSeconds / (3600 * 24))
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return `${days} days, ${hours} h, ${minutes} m, ${seconds} s`
  })

  constructor() {
    this.intervalId = setInterval(() => {
      this.now.set(new Date())
    }, 1000)
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }
}
