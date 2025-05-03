import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTheaterComponent } from './select-theater/select-theater.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';



@NgModule({
  declarations: [
    SelectTheaterComponent,
    SelectSeatsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
