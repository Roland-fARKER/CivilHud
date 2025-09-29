export type TipoMamposteria = 'bloque' | 'piedra' | 'ladrillo';

export interface MamposteriaInput {
  alto: number; // m
  perimetro: number; // m
  areaBoquetes: number; // m2
  tipo: TipoMamposteria;
}

export interface ColumnasVigasInput {
  alto: number; // m
  ancho: number; // m
  largo: number; // m
  varillas: number; // cantidad
  diametro: string; // "#2", "#3", "#4"
}

export interface PisoInput {
  area: number; // m2
  espesor: number; // m
}
