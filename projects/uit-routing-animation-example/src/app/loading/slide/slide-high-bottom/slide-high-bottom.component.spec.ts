import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideHighBottomComponent } from './slide-high-bottom.component';

describe('SlideHighBottomComponent', () => {
  let component: SlideHighBottomComponent;
  let fixture: ComponentFixture<SlideHighBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideHighBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideHighBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
