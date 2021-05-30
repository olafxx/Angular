import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePagesInfoComponent } from './info.component';
import { HttpService } from '../../../../services/httpservice.service';

const routes: Routes = [{ path: '', component: PrivatePagesInfoComponent }];

@NgModule({
  declarations: [ PrivatePagesInfoComponent ],
  providers: [HttpService],
  imports: [RouterModule.forChild(routes)]
})
  
export class PrivateInfoModule { }
