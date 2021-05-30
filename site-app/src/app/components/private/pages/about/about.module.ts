import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePagesAboutComponent } from './about.component';
import { HttpService } from '../../../../services/httpservice.service';

import { AboutGuard } from './about.guard';

const routes: Routes = [{ path: '', component: PrivatePagesAboutComponent, canActivate: [AboutGuard] }];

@NgModule({
  declarations: [ PrivatePagesAboutComponent ],
  providers: [HttpService, AboutGuard],
  imports: [RouterModule.forChild(routes)]
})
 
export class PrivateAboutModule { }
