import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Decor } from './decor/decor';
import { Perso } from './perso/perso';

@NgModule({
    imports: [CommonModule, Decor, Perso],
    exports: [Decor, Perso],
})
export class SharedModule { }