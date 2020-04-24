import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipLowComponent } from './flip-low.component';

describe('FlipLowComponent', () => {
  let component: FlipLowComponent;
  let fixture: ComponentFixture<FlipLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
