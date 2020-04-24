import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideLowComponent } from './scale-and-slide-low.component';

describe('ScaleAndSlideLowComponent', () => {
  let component: ScaleAndSlideLowComponent;
  let fixture: ComponentFixture<ScaleAndSlideLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
