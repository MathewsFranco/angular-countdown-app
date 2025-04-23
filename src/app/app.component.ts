import { Component, NgModule, ViewEncapsulation } from '@angular/core'

import { CountdownComponent } from './components/countdown/countdown.component'
import { EventTitleComponent } from './components/event-title/event-title.component'
import { FormComponent } from './components/form/form.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountdownComponent, EventTitleComponent, FormComponent],
  template:
    '<div class="container"><app-event-title/><app-countdown/><app-countdown-form/></div>',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
