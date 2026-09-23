import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { LocaleSwitch } from '../locale-switch/locale-switch';
import { Constantes } from '../../shared/constantes';
import { Subject } from 'rxjs';
import { Decor } from '../../shared/decor/decor';

@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule, SharedModule, LocaleSwitch],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator implements OnInit {

  @ViewChild(Decor) decorFields!: Decor;

  hasDecor = new FormControl('');

  showDecorField = false;
  locale = Constantes.INDICE_FRANCAIS;
  localeObservable = new Subject<number>();

  ngOnInit(): void {
    this.hasDecor.valueChanges.subscribe((val) => {
this.onDecorCheckChange(val)
    })
  }

  initForms(){
    this.hasDecor = new FormControl('')
  }

onLocaleChange(val: number | null){
  this.locale = val ?? Constantes.INDICE_FRANCAIS;
  this.localeObservable.next(this.locale);
  console.log(this.locale, this.localeObservable);
}

  onDecorCheckChange(val: string | null) {
    this.showDecorField = val === 'true';
  }

  onSubmit(){
    console.log('cc1',this.decorFields.calculerScore());
  }
}
