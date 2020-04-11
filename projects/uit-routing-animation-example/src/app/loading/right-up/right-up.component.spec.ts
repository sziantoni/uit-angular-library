import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightUpComponent } from './right-up.component';

describe('RightUpComponent', () => {
  let component: RightUpComponent;
  let fixture: ComponentFixture<RightUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
