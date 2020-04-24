import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbHighLowComponent } from './stdb-high-low.component';

describe('StdbHighLowComponent', () => {
  let component: StdbHighLowComponent;
  let fixture: ComponentFixture<StdbHighLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbHighLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbHighLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
