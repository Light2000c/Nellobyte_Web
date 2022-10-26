import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaecEpinComponent } from './waec-epin.component';

describe('WaecEpinComponent', () => {
  let component: WaecEpinComponent;
  let fixture: ComponentFixture<WaecEpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaecEpinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaecEpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
