import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideLowMediumComponent } from './scale-and-slide-low-medium.component';

describe('ScaleAndSlideLowMediumComponent', () => {
  let component: ScaleAndSlideLowMediumComponent;
  let fixture: ComponentFixture<ScaleAndSlideLowMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideLowMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideLowMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
