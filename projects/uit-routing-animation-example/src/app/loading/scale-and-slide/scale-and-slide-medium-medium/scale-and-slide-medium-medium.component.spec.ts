import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideMediumMediumComponent } from './scale-and-slide-medium-medium.component';

describe('ScaleAndSlideMediumMediumComponent', () => {
  let component: ScaleAndSlideMediumMediumComponent;
  let fixture: ComponentFixture<ScaleAndSlideMediumMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideMediumMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideMediumMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
