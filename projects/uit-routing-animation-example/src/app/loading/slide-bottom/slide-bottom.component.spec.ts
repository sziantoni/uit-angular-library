import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBottomComponent } from './slide-bottom.component';

describe('SlideBottomComponent', () => {
  let component: SlideBottomComponent;
  let fixture: ComponentFixture<SlideBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
