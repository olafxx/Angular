import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePagesInfoComponent } from './info.component';

const routes: Routes = [{ path: '', component: PrivatePagesInfoComponent }];

@NgModule({
  declarations: [ PrivatePagesInfoComponent ],
  imports: [RouterModule.forChild(routes)]
})
  
export class PrivateInfoModule { }
