import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePagesAboutComponent } from './about.component';
import { HttpService } from '../../../../services/httpservice.service';

const routes: Routes = [{ path: '', component: PrivatePagesAboutComponent }];

@NgModule({
  declarations: [ PrivatePagesAboutComponent ],
  providers: [HttpService],
  imports: [RouterModule.forChild(routes)]
})
 
export class PrivateAboutModule { }
