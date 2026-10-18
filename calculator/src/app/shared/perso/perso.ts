import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constantes } from '../constantes';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'tr[app-perso]',
  imports: [FormsModule],
  templateUrl: './perso.html',
  styleUrl: './perso.scss',
})
export class Perso implements OnInit, OnDestroy {
  @Input({ required: true }) localeObservable!: Observable<number>;
  @Input() index = 0;

  private localeSubscription?: Subscription;

  selectRepresente: number = 5;
  selectEncrage: string = 'sketch';
  selectCouleur: string = 'aucun';
  selectOmbrage: number = 1;
  sousTotal: number = 0;

  texteLigne: string = '';
  texteNo: string = '';
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
    this.localeSubscription = this.localeObservable.subscribe(indice => {
      this.actualiserTrad(indice);
    });
  }
  ngOnDestroy(): void {
    this.localeSubscription?.unsubscribe();
  }

  protected actualiserTrad(indice : number){

      this.texteLigne = Constantes.CHA_CHAR[indice];
      this.texteNo = Constantes.CHA_CLOSEUP[indice];
      this.texteAbstrait = Constantes.CHA_PORTRAIT[indice];
      this.texteAccessoire = Constantes.CHA_HALF[indice];
      this.texteSimple = Constantes.CHA_KNEE[indice];
      this.texteScene = Constantes.CHA_FULL[indice];
  
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
    this.sousTotal = this.selectRepresente * this.calculerFinition() * this.selectOmbrage * (1 + this.index * 0.2);
    return this.sousTotal;
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
