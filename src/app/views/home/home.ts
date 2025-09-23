import { Component } from '@angular/core';

interface contextItem {
  id: number;
  label: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  menuOpen = false;
  listItems: contextItem[] = [
    {
      id: 1,
      label: 'Cálculos Precisos',
      description:
        'Obtén cálculos exactos de materiales con medidas básicas. Reportes detallados y descargables.',
      icon: 'calculator',
    },
    {
      id: 2,
      label: 'Red de Ferreterías',
      description:
        'Conecta con ferreterías locales, compara precios transparentemente y accede a nuevos proveedores.',
      icon: 'Store',
    },
    {
      id: 3,
      label: 'Licitaciones Digitales',
      description:
        'Publica tus necesidades y recibe ofertas de múltiples ferreterías con sistema de chat integrado.',
      icon: 'fileSpreadsheet',
    },
    {
      id: 4,
      label: 'Para Todos los Niveles',
      description:
        'Desde familias de autoconstrucción hasta profesionales. Interfaz intuitiva para cualquier usuario.',
      icon: 'Users',
    },
    {
      id: 5,
      label: 'Seguro y Confiable',
      description:
        'Plataforma segura con verificación de ferreterías y sistema de calificaciones transparente.',
      icon: 'shieldUser',
    },
    {
      id: 6,
      label: 'Ahorro Garantizado',
      description:
        'Reduce desperdicios y ahorra 15-30% en materiales con nuestros cálculos optimizados.',
      icon: 'Coins',
    }        
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
