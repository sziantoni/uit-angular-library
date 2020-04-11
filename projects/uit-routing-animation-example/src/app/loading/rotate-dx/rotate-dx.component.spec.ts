import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateDxComponent } from './rotate-dx.component';

describe('RotateDxComponent', () => {
  let component: RotateDxComponent;
  let fixture: ComponentFixture<RotateDxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateDxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateDxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
