import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveupRotateComponent } from './moveup-rotate.component';

describe('MoveupRotateComponent', () => {
  let component: MoveupRotateComponent;
  let fixture: ComponentFixture<MoveupRotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveupRotateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveupRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
