import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideHighLowComponent } from './scale-and-slide-high-low.component';

describe('ScaleAndSlideHighLowComponent', () => {
  let component: ScaleAndSlideHighLowComponent;
  let fixture: ComponentFixture<ScaleAndSlideHighLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideHighLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideHighLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
