import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbHighHighComponent } from './stdb-high-high.component';

describe('StdbHighHighComponent', () => {
  let component: StdbHighHighComponent;
  let fixture: ComponentFixture<StdbHighHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbHighHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbHighHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
