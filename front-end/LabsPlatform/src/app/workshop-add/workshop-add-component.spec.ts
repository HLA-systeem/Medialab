import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopAddComponentComponent } from './workshop-add-component';

describe('WorkshopAddComponentComponent', () => {
  let component: WorkshopAddComponentComponent;
  let fixture: ComponentFixture<WorkshopAddComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopAddComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
