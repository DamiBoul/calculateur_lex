import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator implements OnInit {
  hasDecor = new FormControl('');
  showDecorField = false;

  ngOnInit(): void {
    this.hasDecor.valueChanges.subscribe((val) => {
this.onDecorCheckChange(val)
    })
  }

  onDecorCheckChange(val: string | null) {
    this.showDecorField = val === 'true'
  }
}
