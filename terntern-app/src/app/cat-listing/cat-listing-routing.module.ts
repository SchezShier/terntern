import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatListingPage } from './cat-listing.page';

const routes: Routes = [
  {
    path: '',
    component: CatListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatListingPageRoutingModule {}
