import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPendingPageRoutingModule } from './add-pending-routing.module';

import { AddPendingPage } from './add-pending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPendingPageRoutingModule
  ],
  declarations: [AddPendingPage]
})
export class AddPendingPageModule {}
