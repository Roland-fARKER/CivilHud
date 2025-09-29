import { Component } from '@angular/core';
import { Profesion } from '../../../models/profesions.enum';
import { UsagePurpose } from '../../../models/usage-porpuse.enum';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  profesiones = Object.values(Profesion).map((p) => ({ label: p, value: p }));
  usagePurposes = Object.values(UsagePurpose).map((u) => ({ label: u, value: u }));

  profesionSeleccionada: string | null = null;
  selectedPurpose: string | null = null;
}
