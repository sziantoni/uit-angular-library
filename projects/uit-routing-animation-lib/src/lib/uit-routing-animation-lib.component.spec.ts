import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UitRoutingAnimationLibComponent } from './uit-routing-animation-lib.component';

describe('UitRoutingAnimationLibComponent', () => {
  let component: UitRoutingAnimationLibComponent;
  let fixture: ComponentFixture<UitRoutingAnimationLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UitRoutingAnimationLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UitRoutingAnimationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
