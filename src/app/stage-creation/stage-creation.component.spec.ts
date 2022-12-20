import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageCreationComponent } from './stage-creation.component';

describe('StageCreationComponent', () => {
  let component: StageCreationComponent;
  let fixture: ComponentFixture<StageCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
