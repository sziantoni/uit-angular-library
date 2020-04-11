import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateSxComponent } from './rotate-sx.component';

describe('RotateSxComponent', () => {
  let component: RotateSxComponent;
  let fixture: ComponentFixture<RotateSxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateSxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateSxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
