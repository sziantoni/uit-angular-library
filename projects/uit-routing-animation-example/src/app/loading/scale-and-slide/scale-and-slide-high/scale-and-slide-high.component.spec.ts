import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideHighComponent } from './scale-and-slide-high.component';

describe('ScaleAndSlideHighComponent', () => {
  let component: ScaleAndSlideHighComponent;
  let fixture: ComponentFixture<ScaleAndSlideHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
