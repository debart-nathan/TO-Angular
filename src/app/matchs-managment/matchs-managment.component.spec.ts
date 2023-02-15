import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchsManagmentComponent } from './matchs-managment.component';

describe('MatchsManagmentComponent', () => {
  let component: MatchsManagmentComponent;
  let fixture: ComponentFixture<MatchsManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchsManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
