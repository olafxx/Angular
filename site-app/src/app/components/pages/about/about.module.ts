import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPagesAboutComponent } from './about.component';

import { HttpService } from '../../../services/httpservice.service';

const routes: Routes = [{ path: '', component: PublicPagesAboutComponent }];

@NgModule({
  declarations: [ PublicPagesAboutComponent ],
  providers: [HttpService],
  imports: [RouterModule.forChild(routes)]
})
export class AboutModule { }

 