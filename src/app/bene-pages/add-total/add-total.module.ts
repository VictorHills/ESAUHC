import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTotalPageRoutingModule } from './add-total-routing.module';

import { AddTotalPage } from './add-total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTotalPageRoutingModule
  ],
  declarations: [AddTotalPage]
})
export class AddTotalPageModule {}
