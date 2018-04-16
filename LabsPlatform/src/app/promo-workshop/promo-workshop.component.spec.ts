import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoWorkshopComponent } from './promo-workshop.component';

describe('PromoWorkshopComponent', () => {
  let component: PromoWorkshopComponent;
  let fixture: ComponentFixture<PromoWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
