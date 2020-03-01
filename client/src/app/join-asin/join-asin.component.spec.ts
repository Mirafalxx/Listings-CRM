import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAsinComponent } from './join-asin.component';

describe('JoinAsinComponent', () => {
  let component: JoinAsinComponent;
  let fixture: ComponentFixture<JoinAsinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAsinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
