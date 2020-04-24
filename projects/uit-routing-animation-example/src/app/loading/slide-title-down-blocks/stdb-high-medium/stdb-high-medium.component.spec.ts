import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbHighMediumComponent } from './stdb-high-medium.component';

describe('StdbHighMediumComponent', () => {
  let component: StdbHighMediumComponent;
  let fixture: ComponentFixture<StdbHighMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbHighMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbHighMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
