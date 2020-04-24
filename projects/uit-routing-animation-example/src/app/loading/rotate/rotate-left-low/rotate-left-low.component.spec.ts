import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateLeftLowComponent } from './rotate-left-low.component';

describe('RotateLeftLowComponent', () => {
  let component: RotateLeftLowComponent;
  let fixture: ComponentFixture<RotateLeftLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateLeftLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateLeftLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
