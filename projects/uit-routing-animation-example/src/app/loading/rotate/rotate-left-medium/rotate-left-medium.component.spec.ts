import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateLeftMediumComponent } from './rotate-left-medium.component';

describe('RotateLeftMediumComponent', () => {
  let component: RotateLeftMediumComponent;
  let fixture: ComponentFixture<RotateLeftMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateLeftMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateLeftMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
