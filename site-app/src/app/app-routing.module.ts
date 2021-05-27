import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PublicPagesCatalogMain } from './components/pages/main/main.component';
import { PublicPagesAboutComponent } from './components/pages/about/about.component';
import { PublicPagesCatalogComponent } from './components/pages/catalog/catalog.component';
import { PublicPagesInfoComponent } from './components/pages/info/info.component';

import { PrivatePagesInfoComponent } from './components/private/pages/info/info.component';
import { PrivatePagesAboutComponent } from './components/private/pages/about/about.component';

import { Page404Component } from './components/pages/404/404.component';

const routes: Routes = [
  { path:"", component: PublicPagesCatalogMain },
  { path:"about", component: PublicPagesAboutComponent },
  { path:"catalog", component: PublicPagesCatalogComponent },
  { path:"info", component: PublicPagesInfoComponent },
  { path:"private/info", component: PrivatePagesInfoComponent },
  { path:"private/about", component: PrivatePagesAboutComponent },
  { path:"**", component: Page404Component },
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
