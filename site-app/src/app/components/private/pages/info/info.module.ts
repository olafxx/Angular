import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePagesInfoComponent } from './info.component';
import { HttpService } from '../../../../services/httpservice.service';

import { InfoGuard } from './info.guard';

const routes: Routes = [{ path: '', component: PrivatePagesInfoComponent, canActivate: [InfoGuard] }];

@NgModule({
  declarations: [ PrivatePagesInfoComponent ],
  providers: [HttpService, InfoGuard],
  imports: [RouterModule.forChild(routes)]
})
  
export class PrivateInfoModule { }
