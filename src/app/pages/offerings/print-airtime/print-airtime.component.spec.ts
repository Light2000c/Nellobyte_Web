import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAirtimeComponent } from './print-airtime.component';

describe('PrintAirtimeComponent', () => {
  let component: PrintAirtimeComponent;
  let fixture: ComponentFixture<PrintAirtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAirtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAirtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
