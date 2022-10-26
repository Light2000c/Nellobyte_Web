import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBundleComponent } from './data-bundle.component';

describe('DataBundleComponent', () => {
  let component: DataBundleComponent;
  let fixture: ComponentFixture<DataBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBundleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
