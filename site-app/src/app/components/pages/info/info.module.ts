import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPagesInfoComponent } from './info.component';

const routes: Routes = [{ path: '', component: PublicPagesInfoComponent }];

@NgModule({
  declarations: [ PublicPagesInfoComponent ],
  imports: [RouterModule.forChild(routes)]
})
export class InfoModule { }

 