import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleSwitch } from './locale-switch';

describe('LocaleSwitch', () => {
  let component: LocaleSwitch;
  let fixture: ComponentFixture<LocaleSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
