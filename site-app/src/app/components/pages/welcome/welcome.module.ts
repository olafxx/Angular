import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPagesWelcomeComponent } from './welcome.component';

const routes: Routes = [{ path: '', component: PublicPagesWelcomeComponent }];

@NgModule({
  declarations: [ PublicPagesWelcomeComponent ],
  imports: [RouterModule.forChild(routes)]
})
export class WelcomeModule { }
