import { Calculator } from './views/calculator/calculator';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', component: Calculator }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorRoutingModule {}
