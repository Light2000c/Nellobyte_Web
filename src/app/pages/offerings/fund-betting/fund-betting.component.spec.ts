import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundBettingComponent } from './fund-betting.component';

describe('FundBettingComponent', () => {
  let component: FundBettingComponent;
  let fixture: ComponentFixture<FundBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundBettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
