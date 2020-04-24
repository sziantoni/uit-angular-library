import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveUpRightMediumComponent } from './move-up-right-medium.component';

describe('MoveUpRightMediumComponent', () => {
  let component: MoveUpRightMediumComponent;
  let fixture: ComponentFixture<MoveUpRightMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveUpRightMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveUpRightMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
