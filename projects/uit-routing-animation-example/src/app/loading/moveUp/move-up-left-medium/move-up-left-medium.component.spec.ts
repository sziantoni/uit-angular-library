import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveUpLeftMediumComponent } from './move-up-left-medium.component';

describe('MoveUpLeftMediumComponent', () => {
  let component: MoveUpLeftMediumComponent;
  let fixture: ComponentFixture<MoveUpLeftMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveUpLeftMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveUpLeftMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
