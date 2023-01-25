import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournInscriptionComponent } from './tourn-inscription.component';

describe('TournInscriptionComponent', () => {
  let component: TournInscriptionComponent;
  let fixture: ComponentFixture<TournInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
