import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveUpRightHighComponent } from './move-up-right-high.component';

describe('MoveUpRightHighComponent', () => {
  let component: MoveUpRightHighComponent;
  let fixture: ComponentFixture<MoveUpRightHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveUpRightHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveUpRightHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
