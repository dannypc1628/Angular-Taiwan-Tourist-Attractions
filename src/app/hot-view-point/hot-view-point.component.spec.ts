import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotViewPointComponent } from './hot-view-point.component';

describe('HotViewPointComponent', () => {
  let component: HotViewPointComponent;
  let fixture: ComponentFixture<HotViewPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotViewPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotViewPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
