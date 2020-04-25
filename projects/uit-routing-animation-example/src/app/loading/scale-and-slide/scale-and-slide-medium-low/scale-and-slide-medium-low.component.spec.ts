import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideMediumLowComponent } from './scale-and-slide-medium-low.component';

describe('ScaleAndSlideMediumLowComponent', () => {
  let component: ScaleAndSlideMediumLowComponent;
  let fixture: ComponentFixture<ScaleAndSlideMediumLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideMediumLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideMediumLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
