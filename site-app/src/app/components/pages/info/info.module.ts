import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPagesInfoComponent } from './info.component';

import { HttpService } from '../../../services/httpservice.service';

const routes: Routes = [{ path: '', component: PublicPagesInfoComponent }];

@NgModule({
  declarations: [ PublicPagesInfoComponent ],
  providers: [HttpService],
  imports: [RouterModule.forChild(routes)]
})
export class InfoModule { }

 