import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  LucideAngularModule,
  File,
  House,
  Menu,
  UserCheck,
  Calculator,
  Store,
  FileSpreadsheet,
  Users,
  ShieldUser,
  Coins,
  Pencil,
  HardHat,
} from 'lucide-angular';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './views/home/home';
import customPreset from './utilities/custom-preset.primeng';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

@NgModule({
  declarations: [App, Home],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({
      File,
      Calculator,
      Store,
      Users,
      Coins,
      ShieldUser,
      FileSpreadsheet,
      House,
      Menu,
      UserCheck,
      Pencil,
      HardHat,
    }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: customPreset,
        options: { darkModeSelector: false },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [App],
})
export class AppModule {}
