import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IconsModule } from './icons/icons.module';
import { StepperModule } from 'primeng/stepper';
import { SelectModule } from 'primeng/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CheckboxModule,
    ConfirmDialogModule,
    IconsModule,
    StepperModule,
    SelectModule
  ],
  exports: [
    CardModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    HttpClientModule,
    CheckboxModule,
    ConfirmDialogModule,
    IconsModule,
    StepperModule,
    SelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}