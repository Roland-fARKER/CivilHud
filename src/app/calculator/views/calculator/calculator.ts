import { Component } from '@angular/core';
import { ColumnasVigasInput, MamposteriaInput, PisoInput } from '../../../models/calcule-types';
import { CalculoMaterialesService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: false,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  tipos = [
    { label: 'Mampostería', value: 'mamposteria' },
    { label: 'Columnas y Vigas', value: 'columnas' },
    { label: 'Piso', value: 'piso' },
  ];

  tipoSeleccionado: string | null = null;
  resultado: any = null;

  ngOnInit() {
    console.log(
      this.calculoService.calcularMamposteria({
        alto: 5,
        perimetro: 20,
        areaBoquetes: 24,
        tipo: 'bloque',
      })
    );
  }

  // Models para los inputs
  mamposteria: MamposteriaInput = { alto: 0, perimetro: 0, areaBoquetes: 0, tipo: 'piedra' };
  columnas: ColumnasVigasInput = { alto: 0, ancho: 0, largo: 0, varillas: 0, diametro: '#3' };
  piso: PisoInput = { area: 0, espesor: 0 };

  constructor(private calculoService: CalculoMaterialesService) {}

  calcular() {
    if (this.tipoSeleccionado === 'mamposteria') {
      this.resultado = this.calculoService.calcularMamposteria(this.mamposteria);
    } else if (this.tipoSeleccionado === 'columnas') {
      this.resultado = this.calculoService.calcularColumnasVigas(this.columnas);
    } else if (this.tipoSeleccionado === 'piso') {
      this.resultado = this.calculoService.calcularPiso(this.piso);
    }
  }
}
