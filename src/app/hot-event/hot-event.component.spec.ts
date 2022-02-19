import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotEventComponent } from './hot-event.component';

describe('HotEventComponent', () => {
  let component: HotEventComponent;
  let fixture: ComponentFixture<HotEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
