import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constantes } from '../../shared/constantes';

@Component({
  selector: 'app-locale-switch',
  templateUrl: './locale-switch.html',
  styleUrl: './locale-switch.scss',
  imports: [CommonModule, FormsModule],
})
export class LocaleSwitch {
  locales = [
    { code: Constantes.INDICE_FRANCAIS, name: 'Français' },
    { code: Constantes.INDICE_ANGLAIS, name: 'English' },
    { code: Constantes.INDICE_NOF, name: 'nùvèl ortôgraf fransèz' },
  ];

  @Output() localeChanged = new EventEmitter<number>();
  activeLocale = Constantes.INDICE_FRANCAIS;

  onChange(indice: number): void {
    this.activeLocale = indice;
    this.localeChanged.emit(indice);
    console.log(indice);
  }
}