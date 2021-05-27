import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPagesCatalogComponent } from './catalog.component';

const routes: Routes = [{ path: '', component: PublicPagesCatalogComponent }];

@NgModule({
  declarations: [ PublicPagesCatalogComponent ],
  imports: [RouterModule.forChild(routes)]
})
export class CatalogModule { }

 