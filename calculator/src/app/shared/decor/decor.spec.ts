import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decor } from './decor';

describe('Decor', () => {
  let component: Decor;
  let fixture: ComponentFixture<Decor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decor],
    }).compileComponents();

    fixture = TestBed.createComponent(Decor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
