import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveUpRightLowComponent } from './move-up-right-low.component';

describe('MoveUpRightLowComponent', () => {
  let component: MoveUpRightLowComponent;
  let fixture: ComponentFixture<MoveUpRightLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveUpRightLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveUpRightLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
