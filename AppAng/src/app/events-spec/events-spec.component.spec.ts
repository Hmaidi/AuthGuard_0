import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSpecComponent } from './events-spec.component';

describe('EventsSpecComponent', () => {
  let component: EventsSpecComponent;
  let fixture: ComponentFixture<EventsSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
