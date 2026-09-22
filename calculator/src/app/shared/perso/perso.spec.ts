import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perso } from './perso';

describe('Perso', () => {
  let component: Perso;
  let fixture: ComponentFixture<Perso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perso],
    }).compileComponents();

    fixture = TestBed.createComponent(Perso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
