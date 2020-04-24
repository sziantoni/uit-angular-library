import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveUpLeftLowComponent } from './move-up-left-low.component';

describe('MoveUpLeftLowComponent', () => {
  let component: MoveUpLeftLowComponent;
  let fixture: ComponentFixture<MoveUpLeftLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveUpLeftLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveUpLeftLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
