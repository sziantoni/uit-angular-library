import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseFlipComponent } from './surprise-flip.component';

describe('SurpriseFlipComponent', () => {
  let component: SurpriseFlipComponent;
  let fixture: ComponentFixture<SurpriseFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
