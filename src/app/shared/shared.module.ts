import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
