import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSelectComponent } from './badge-select-screen.component';

describe('BadgeSelectScreenComponent', () => {
  let component: BadgeSelectComponent;
  let fixture: ComponentFixture<BadgeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
