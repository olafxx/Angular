import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPagesAboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: PublicPagesAboutComponent }];

@NgModule({
  declarations: [ PublicPagesAboutComponent ],
  imports: [RouterModule.forChild(routes)]
})
export class AboutModule { }

 