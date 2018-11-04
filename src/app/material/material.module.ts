import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
