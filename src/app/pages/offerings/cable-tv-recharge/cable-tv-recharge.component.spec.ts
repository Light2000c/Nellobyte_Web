import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableTVRechargeComponent } from './cable-tv-recharge.component';

describe('CableTVRechargeComponent', () => {
  let component: CableTVRechargeComponent;
  let fixture: ComponentFixture<CableTVRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CableTVRechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CableTVRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
