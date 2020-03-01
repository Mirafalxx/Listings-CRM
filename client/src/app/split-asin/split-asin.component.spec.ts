import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitAsinComponent } from './split-asin.component';

describe('SplitAsinComponent', () => {
  let component: SplitAsinComponent;
  let fixture: ComponentFixture<SplitAsinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitAsinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitAsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
