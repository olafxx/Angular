import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 
const routes: Routes = [
 // { path:"", component: PublicPagesWelcomeComponent },
 // { path:"about", component: PublicPagesAboutComponent },
 // { path:"catalog", component: PublicPagesCatalogComponent },
 // { path:"info", component: PublicPagesInfoComponent },
 // { path:"private/info", component: PrivatePagesInfoComponent },
 // { path:"private/about", component: PrivatePagesAboutComponent },
 // { path:"**", component: Page404Component },

  { path:"", loadChildren: () => import('./components/pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path:"about", loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path:"catalog", loadChildren: () => import('./components/pages/catalog/catalog.module').then(m => m.CatalogModule) },
  { path:"info", loadChildren: () => import('./components/pages/info/info.module').then(m => m.InfoModule) },
  { path:"private/info", loadChildren: () => import('./components/private/pages/info/info.module').then(m => m.PrivateInfoModule) },
  { path:"private/about", loadChildren: () => import('./components/private/pages/about/about.module').then(m => m.PrivateAboutModule) },
  { path:"**", loadChildren: () => import('./components/pages/404/404.module').then(m => m.Page404Module) },
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
