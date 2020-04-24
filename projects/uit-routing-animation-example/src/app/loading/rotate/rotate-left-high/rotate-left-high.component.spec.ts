import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateLeftHighComponent } from './rotate-left-high.component';

describe('RotateLeftHighComponent', () => {
  let component: RotateLeftHighComponent;
  let fixture: ComponentFixture<RotateLeftHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateLeftHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateLeftHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
