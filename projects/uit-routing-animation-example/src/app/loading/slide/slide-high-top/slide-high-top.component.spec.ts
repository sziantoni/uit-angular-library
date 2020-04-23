import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideHighTopComponent } from './slide-high-top.component';

describe('SlideHighTopComponent', () => {
  let component: SlideHighTopComponent;
  let fixture: ComponentFixture<SlideHighTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideHighTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideHighTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
