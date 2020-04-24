import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseMediumComponent } from './surprise-medium.component';

describe('SurpriseMediumComponent', () => {
  let component: SurpriseMediumComponent;
  let fixture: ComponentFixture<SurpriseMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
