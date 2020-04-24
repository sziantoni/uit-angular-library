import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateRightMediumComponent } from './rotate-right-medium.component';

describe('RotateRightMediumComponent', () => {
  let component: RotateRightMediumComponent;
  let fixture: ComponentFixture<RotateRightMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateRightMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateRightMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
