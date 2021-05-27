import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePagesAboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: PrivatePagesAboutComponent }];

@NgModule({
  declarations: [ PrivatePagesAboutComponent ],
  imports: [RouterModule.forChild(routes)]
})
 
export class PrivateAboutModule { }
