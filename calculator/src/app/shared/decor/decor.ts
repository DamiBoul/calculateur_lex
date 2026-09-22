import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Constantes } from '../constantes';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-decor',
  imports: [],
  templateUrl: './decor.html',
  styleUrl: './decor.scss',
})
export class Decor implements OnInit {
  @Input({required: true}) localeObservable = new Subject<number>();
  locale = Constantes.INDICE_FRANCAIS;

  texteDeTest: string = ''

  ngOnInit(): void {
    this.localeObservable.subscribe(value => {
      this.texteDeTest = Constantes.TEXTE_DE_TEST[value]
    })
  }
}
