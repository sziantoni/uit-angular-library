import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideHighHighComponent } from './scale-and-slide-high-high.component';

describe('ScaleAndSlideHighHighComponent', () => {
  let component: ScaleAndSlideHighHighComponent;
  let fixture: ComponentFixture<ScaleAndSlideHighHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideHighHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideHighHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
