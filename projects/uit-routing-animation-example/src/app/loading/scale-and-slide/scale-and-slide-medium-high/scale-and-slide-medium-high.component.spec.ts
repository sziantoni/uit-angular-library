import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideMediumHighComponent } from './scale-and-slide-medium-high.component';

describe('ScaleAndSlideMediumHighComponent', () => {
  let component: ScaleAndSlideMediumHighComponent;
  let fixture: ComponentFixture<ScaleAndSlideMediumHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideMediumHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideMediumHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
