import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperApiComponent } from './developer-api.component';

describe('DeveloperApiComponent', () => {
  let component: DeveloperApiComponent;
  let fixture: ComponentFixture<DeveloperApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
