import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbMoveupComponent } from './stdb-moveup.component';

describe('StdbMoveupComponent', () => {
  let component: StdbMoveupComponent;
  let fixture: ComponentFixture<StdbMoveupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbMoveupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbMoveupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
