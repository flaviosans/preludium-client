import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCreateComponent } from './eventos-create.component';

describe('EventosCreateComponent', () => {
  let component: EventosCreateComponent;
  let fixture: ComponentFixture<EventosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
