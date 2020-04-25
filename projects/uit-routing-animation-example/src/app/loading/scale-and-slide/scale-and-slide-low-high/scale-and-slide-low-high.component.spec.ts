import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAndSlideLowHighComponent } from './scale-and-slide-low-high.component';

describe('ScaleAndSlideLowHighComponent', () => {
  let component: ScaleAndSlideLowHighComponent;
  let fixture: ComponentFixture<ScaleAndSlideLowHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAndSlideLowHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAndSlideLowHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
