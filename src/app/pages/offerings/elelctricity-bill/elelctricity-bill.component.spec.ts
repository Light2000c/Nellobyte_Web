import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElelctricityBillComponent } from './elelctricity-bill.component';

describe('ElelctricityBillComponent', () => {
  let component: ElelctricityBillComponent;
  let fixture: ComponentFixture<ElelctricityBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElelctricityBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElelctricityBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
