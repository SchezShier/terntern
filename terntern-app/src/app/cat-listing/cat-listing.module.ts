import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatListingPageRoutingModule } from './cat-listing-routing.module';

import { CatListingPage } from './cat-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatListingPageRoutingModule
  ],
  declarations: [CatListingPage]
})
export class CatListingPageModule {}
