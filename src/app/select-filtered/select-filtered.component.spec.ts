import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilteredComponent } from './select-filtered.component';

describe('SelectFilteredComponent', () => {
  let component: SelectFilteredComponent;
  let fixture: ComponentFixture<SelectFilteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFilteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
