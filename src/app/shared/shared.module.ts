import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ModalComponent } from './modal/modal.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [InputComponent, ModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    InputTextareaModule,
  ],
  exports: [InputComponent, ModalComponent],
})
export class SharedModule {}
