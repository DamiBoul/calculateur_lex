import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Constantes } from '../constantes';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-decor',
  imports: [FormsModule],
  templateUrl: './decor.html',
  styleUrl: './decor.scss',
})
export class Decor implements OnInit {
  @Input({required: true}) localeObservable = new Subject<number>();

  selectRepresente: number = 2;
  selectEncrage: string = 'sketch';
  selectCouleur: string = 'aucun';
  selectOmbrage: number = 1;

  texteAbstrait: string = '';
  texteAccessoire: string = '';
  texteSimple: string = '';
  texteScene: string = '';
  
  texteSketch: string = '';
  texteEncrageAbouti: string = '';
  
  texteAucun: string = '';
  texteBrouillon: string = '';
  texteCouleurAbouti: string = '';
  
  texteOmbrageAucun: string = '';
  texteOmbrageSimple: string = '';
  texteOmbrageComplet: string = '';

  ngOnInit(): void {
    this.actualiserTrad(Constantes.INDICE_FRANCAIS);

    this.localeObservable.subscribe(value => {
      this.actualiserTrad(value);
    });
  }

  protected actualiserTrad(indice : number){
      this.texteAbstrait = Constantes.DEC_ABSTRAIT[indice];
      this.texteAccessoire = Constantes.DEC_ACCESSOIRE[indice];
      this.texteSimple = Constantes.DEC_SIMPLE[indice];
      this.texteScene = Constantes.DEC_SCENE[indice];
  
      this.texteSketch = Constantes.DEC_SKETCH[indice];
      this.texteEncrageAbouti = Constantes.DEC_ENCRAGE_ABOUTI[indice];
  
      this.texteAucun = Constantes.DEC_COULEUR_AUCUN[indice];
      this.texteBrouillon = Constantes.DEC_BROUILLON[indice];
      this.texteCouleurAbouti = Constantes.DEC_COULEUR_ABOUTI[indice];
  
      this.texteOmbrageAucun = Constantes.DEC_OMBRAGE_AUCUN[indice];
      this.texteOmbrageSimple = Constantes.DEC_OMBRAGE_SIMPLE[indice];
      this.texteOmbrageComplet = Constantes.DEC_OMBRAGE_COMPLET[indice];
  }

  public calculerScore(){
    return this.selectRepresente * this.calculerFinition() * this.selectOmbrage;
  }

  private calculerFinition(){
    if(this.selectEncrage === 'sketch'){
      if(this.selectCouleur === 'aucun'){
        return 1
      }else if(this.selectCouleur === 'brouillon'){
        return 1.4
      }else if(this.selectCouleur === 'abouti'){
        return 1.7
      }
    }else if(this.selectEncrage === 'abouti'){
      if(this.selectCouleur === 'aucun'){
        return 1.5
      }else if(this.selectCouleur === 'brouillon'){
        return 1.9
      }else if(this.selectCouleur === 'abouti'){
        return 2.5
      }
    }
    return -1
  }
}
