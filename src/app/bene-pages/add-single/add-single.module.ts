import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSinglePageRoutingModule } from './add-single-routing.module';

import { AddSinglePage } from './add-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSinglePageRoutingModule
  ],
  declarations: [AddSinglePage]
})
export class AddSinglePageModule {}
