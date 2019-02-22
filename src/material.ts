import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDialogModule],
})
export class MaterialModule { }