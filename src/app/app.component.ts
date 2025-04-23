import { Component, NgModule } from '@angular/core'

import { CountdownComponent } from './components/countdown/countdown.component'
import { EventTitleComponent } from './components/event-title/event-title.component'
import { FormComponent } from './components/form/form.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountdownComponent, EventTitleComponent, FormComponent],
  template: '<app-event-title/><app-countdown/><app-countdown-form/>',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
