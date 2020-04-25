import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideLowLowComponent } from './scale-and-slide-low-low.component';

describe('ScaleAndSlideLowLowComponent', () => {
  let component: ScaleAndSlideLowLowComponent;
  let fixture: ComponentFixture<ScaleAndSlideLowLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideLowLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideLowLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
