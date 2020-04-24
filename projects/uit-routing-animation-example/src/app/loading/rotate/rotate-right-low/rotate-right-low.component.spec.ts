import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateRightLowComponent } from './rotate-right-low.component';

describe('RotateRightLowComponent', () => {
  let component: RotateRightLowComponent;
  let fixture: ComponentFixture<RotateRightLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateRightLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateRightLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
