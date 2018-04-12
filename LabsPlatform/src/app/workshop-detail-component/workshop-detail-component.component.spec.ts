import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopDetailComponentComponent } from './workshop-detail-component.component';

describe('WorkshopDetailComponentComponent', () => {
  let component: WorkshopDetailComponentComponent;
  let fixture: ComponentFixture<WorkshopDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
