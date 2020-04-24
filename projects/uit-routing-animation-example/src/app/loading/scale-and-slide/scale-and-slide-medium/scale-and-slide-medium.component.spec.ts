import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideMediumComponent } from './scale-and-slide-medium.component';

describe('ScaleAndSlideMediumComponent', () => {
  let component: ScaleAndSlideMediumComponent;
  let fixture: ComponentFixture<ScaleAndSlideMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
