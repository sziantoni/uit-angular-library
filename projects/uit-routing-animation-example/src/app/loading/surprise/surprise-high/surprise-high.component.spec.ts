import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseHighComponent } from './surprise-high.component';

describe('SurpriseHighComponent', () => {
  let component: SurpriseHighComponent;
  let fixture: ComponentFixture<SurpriseHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
