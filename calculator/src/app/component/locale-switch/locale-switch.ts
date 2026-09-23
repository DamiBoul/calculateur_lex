import {
  Inject,
  Component,
  LOCALE_ID,
  OnInit,
  Output, EventEmitter
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { Constantes } from '../../shared/constantes';
@Component({
  selector: 'app-locale-switch',
  templateUrl: './locale-switch.html',
  imports: [ɵInternalFormsSharedModule, FormsModule],
})
export class LocaleSwitch {
  locales = [
    { code: Constantes.INDICE_FRANCAIS, name: 'Français' },
    { code: Constantes.INDICE_ANGLAIS, name: 'English' },
    { code: Constantes.INDICE_NOF, name: 'nùvèl ortôgraf fransèz' },
  ];
@Output('localeChanged') localeChanged = new EventEmitter<number>();
 activeLocale: number = 0;

 onChange(){
  this.localeChanged.emit(this.activeLocale);
 }
}