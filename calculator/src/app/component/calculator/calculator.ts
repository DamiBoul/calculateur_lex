import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { LocaleSwitch } from '../locale-switch/locale-switch';
import { Constantes } from '../../shared/constantes';
import { BehaviorSubject } from 'rxjs';
import { Decor } from '../../shared/decor/decor';
import { Perso } from '../../shared/perso/perso';

@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule, SharedModule, LocaleSwitch],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator implements OnInit {

  @ViewChild(Decor) decorFields!: Decor;
  @ViewChild(Perso) persoFields!: Perso;

  hasDecor = new FormControl('');

  showDecorField = false;
  locale = Constantes.INDICE_FRANCAIS;
  total = 0;

  private readonly localeSubject =
  new BehaviorSubject<number>(Constantes.INDICE_FRANCAIS);

  readonly localeObservable = this.localeSubject.asObservable();

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
    this.localeSubject.next(this.locale);
    console.log(val);
    console.log(this.locale, this.localeObservable);
  }

  onDecorCheckChange(val: string | null) {
    this.showDecorField = val === 'true';
  }

  onSubmit(): void {
    const sousTotalDecor = this.decorFields.calculerScore();
    const sousTotalPerso = this.persoFields.calculerScore();

    this.total = sousTotalDecor + sousTotalPerso;
  }

  get enteteRepresente(): string {
    return Constantes.ENTETE_REPRESENTE[this.locale] ?? '';
  }

  get enteteTaille(): string {
    return Constantes.ENTETE_TAILLE[this.locale] ?? '';
  }

  get enteteFinition(): string {
    return Constantes.ENTETE_FINITION[this.locale] ?? '';
  }

  get enteteCouleur(): string {
    return Constantes.ENTETE_COULEUR[this.locale] ?? '';
  }

  get enteteOmbrage(): string {
    return Constantes.ENTETE_OMBRAGE[this.locale] ?? '';
  }

  get enteteSousTotal(): string {
    return Constantes.ENTETE_SOUS_TOTAL[this.locale] ?? '';
  }

  get ajoutPerso(): string {
    return Constantes.BOUTON_ADD[this.locale] ?? '';
  }
  get retraitPerso(): string {
    return Constantes.BOUTON_REMOVE[this.locale] ?? '';
  }
}
