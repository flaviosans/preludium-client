import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatTabsModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
