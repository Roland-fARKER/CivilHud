import { Injectable } from '@angular/core';
import { ColumnasVigasInput, MamposteriaInput, PisoInput } from '../../models/calcule-types';

@Injectable({
  providedIn: 'root',
})
export class CalculoMaterialesService {
  // Proporciones base 1:2:3 (Cemento:Arena:Grava)
  private proporciones = { cemento: 1, arena: 2, grava: 3 };
  private desperdicio = { cemento: 1.05, arena: 1.1, agua: 1.05, grava: 1.15 };

  // Varillas por tipo
  private varillasPeso: Record<string, number> = {
    '#2': 1.5,
    '#3': 3.342,
    '#4': 5.94,
  };

  private mamposterias = {
    bloque: {
      ancho: 0.4,
      alto: 0.2,
      largo: 0.15,
      areaTotal: 0.08,
      volMortero: 0.0027, // volumen de mortero por pieza
      desperdicio: 1.1,
      cantidadTotal: 1045,
    },
    piedra: {
      ancho: 0.6,
      alto: 0.4,
      largo: 0.15,
      areaTotal: 0.24,
      volMortero: 0.0045,
      desperdicio: 1.1,
      cantidadTotal: 348,
    },
    ladrillo: {
      ancho: 0.25,
      alto: 0.12,
      largo: 0.06,
      areaTotal: 0.03,
      volMortero: 0.000666,
      desperdicio: 1.1,
      cantidadTotal: 2787,
    },
  };

  calcularMamposteria(input: MamposteriaInput) {
    const tipo = this.mamposterias[input.tipo];
    if (!tipo) throw new Error('Tipo de mampostería no válido');

    // Área efectiva del muro
    const areaEfectiva = input.alto * input.perimetro - input.areaBoquetes;

    // Área de una pieza
    const areaPieza = tipo.ancho * tipo.alto;

    // Cantidad de piezas necesarias (con desperdicio)
    const cantidadPiezas = Math.ceil((areaEfectiva / areaPieza) * tipo.desperdicio);

    // Volumen de mortero requerido
    const volumenMortero = cantidadPiezas * tipo.volMortero;

    // Proporción 1:4 (cemento:arena)
    const totalPartes = 1 + 4;
    const cemento = volumenMortero * (1 / totalPartes) * this.desperdicio.cemento;
    const arena = volumenMortero * (4 / totalPartes) * this.desperdicio.arena;

    return {
      areaEfectiva,
      cantidadPiezas,
      volumenMortero,
      materiales: { cemento, arena },
    };
  }

  calcularColumnasVigas(input: ColumnasVigasInput) {
    const volumen = input.alto * input.ancho * input.largo;

    const cemento = volumen * this.proporciones.cemento * this.desperdicio.cemento;
    const arena = volumen * this.proporciones.arena * this.desperdicio.arena;
    const grava = volumen * this.proporciones.grava * this.desperdicio.grava;

    const pesoVarillas = (this.varillasPeso[input.diametro] || 0) * input.varillas;

    return {
      volumen,
      materiales: { cemento, arena, grava },
      acero: { pesoVarillas },
    };
  }

  calcularPiso(input: PisoInput) {
    const volumen = input.area * input.espesor;

    const cemento = volumen * this.proporciones.cemento * this.desperdicio.cemento;
    const arena = volumen * this.proporciones.arena * this.desperdicio.arena;
    const grava = volumen * this.proporciones.grava * this.desperdicio.grava;

    return {
      volumen,
      materiales: { cemento, arena, grava },
    };
  }
}
