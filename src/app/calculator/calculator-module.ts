import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calculator } from './views/calculator/calculator';
import { CalculatorRoutingModule } from './calculator.routing';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    Calculator
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SharedModule
  ]
})
export class CalculatorModule { }
