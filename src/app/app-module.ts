import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
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
      HardHat
    }),
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
