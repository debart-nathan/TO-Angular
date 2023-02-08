import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournsManagmentComponent } from './tourns-managment.component';

describe('TournsManagmentComponent', () => {
  let component: TournsManagmentComponent;
  let fixture: ComponentFixture<TournsManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournsManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
