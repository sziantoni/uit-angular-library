import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseLowComponent } from './surprise-low.component';

describe('SurpriseLowComponent', () => {
  let component: SurpriseLowComponent;
  let fixture: ComponentFixture<SurpriseLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
