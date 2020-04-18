import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTitleDownBlocksComponent } from './slide-title-down-blocks.component';

describe('SlideTitleDownBlocksComponent', () => {
  let component: SlideTitleDownBlocksComponent;
  let fixture: ComponentFixture<SlideTitleDownBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTitleDownBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTitleDownBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
