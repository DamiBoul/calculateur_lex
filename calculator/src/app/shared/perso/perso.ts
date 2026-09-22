import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perso',
  imports: [],
  templateUrl: './perso.html',
  styleUrl: './perso.scss',
})
export class Perso {
  @Input({required: true})locale = 'fr';}
