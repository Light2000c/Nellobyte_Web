import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideItemsComponent } from './side-items.component';

describe('SideItemsComponent', () => {
  let component: SideItemsComponent;
  let fixture: ComponentFixture<SideItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
