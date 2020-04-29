import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRotateComponent } from './slide-rotate.component';

describe('SlideRotateComponent', () => {
  let component: SlideRotateComponent;
  let fixture: ComponentFixture<SlideRotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideRotateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
