import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMediumBottomComponent } from './slide-medium-bottom.component';

describe('SlideMediumBottomComponent', () => {
  let component: SlideMediumBottomComponent;
  let fixture: ComponentFixture<SlideMediumBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMediumBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMediumBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
