import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
 
import { PublicPagesCatalogComponent } from './catalog.component';


import { HttpService } from '../../../services/httpservice.service';

const routes: Routes = [{ path: '', component: PublicPagesCatalogComponent }];

@NgModule({
  declarations: [ PublicPagesCatalogComponent ],
  providers: [HttpService],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CatalogModule { }

 