import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPipe } from './header.pipe';


@NgModule({
  declarations: [
    HeaderPipe
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
