import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailesComponent } from './driver-detailes.component';

describe('DriverDetailesComponent', () => {
  let component: DriverDetailesComponent;
  let fixture: ComponentFixture<DriverDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
