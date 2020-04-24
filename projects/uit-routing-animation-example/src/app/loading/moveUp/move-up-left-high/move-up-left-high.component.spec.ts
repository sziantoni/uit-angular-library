import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveUpLeftHighComponent } from './move-up-left-high.component';

describe('MoveUpLeftHighComponent', () => {
  let component: MoveUpLeftHighComponent;
  let fixture: ComponentFixture<MoveUpLeftHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveUpLeftHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveUpLeftHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
