import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPagesCatalogComponent } from './catalog.component';

import { HttpService } from '../../../services/httpservice.service';

const routes: Routes = [{ path: '', component: PublicPagesCatalogComponent }];

@NgModule({
  declarations: [ PublicPagesCatalogComponent ],
  providers: [HttpService],
  imports: [RouterModule.forChild(routes)]
})
export class CatalogModule { }

 