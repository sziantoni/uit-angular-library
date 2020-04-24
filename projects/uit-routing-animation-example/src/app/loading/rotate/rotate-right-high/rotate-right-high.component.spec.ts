import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateRightHighComponent } from './rotate-right-high.component';

describe('RotateRightHighComponent', () => {
  let component: RotateRightHighComponent;
  let fixture: ComponentFixture<RotateRightHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateRightHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateRightHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
