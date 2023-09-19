import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JambEpinComponent } from './jamb-epin.component';

describe('JambEpinComponent', () => {
  let component: JambEpinComponent;
  let fixture: ComponentFixture<JambEpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JambEpinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JambEpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
