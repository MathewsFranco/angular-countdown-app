import { Injectable, effect, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CountdownStateService {
  constructor() {}
  eventTitle = signal(localStorage.getItem('eventTitle') || '')
  eventDate = signal(localStorage.getItem('eventDate') || '')

  setTitle(title: string) {
    this.eventTitle.set(title)
    localStorage.setItem('eventTitle', title)
  }

  setDate(date: string) {
    this.eventDate.set(date)
    localStorage.setItem('eventDate', date)
  }
}
