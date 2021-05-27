import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './404.component';

const routes: Routes = [{ path: '', component: Page404Component }];

@NgModule({
  declarations: [ Page404Component ],
  imports: [RouterModule.forChild(routes)]
})
 
 
export class Page404Module { }
