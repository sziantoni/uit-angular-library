import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideHighMediumComponent } from './scale-and-slide-high-medium.component';

describe('ScaleAndSlideHighMediumComponent', () => {
  let component: ScaleAndSlideHighMediumComponent;
  let fixture: ComponentFixture<ScaleAndSlideHighMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideHighMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideHighMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
