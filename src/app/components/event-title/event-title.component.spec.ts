import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTitleComponent } from './event-title.component';

describe('EventTitleComponent', () => {
  let component: EventTitleComponent;
  let fixture: ComponentFixture<EventTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
