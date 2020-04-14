import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideComponent } from './scale-and-slide.component';

describe('ScaleAndSlideComponent', () => {
  let component: ScaleAndSlideComponent;
  let fixture: ComponentFixture<ScaleAndSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
