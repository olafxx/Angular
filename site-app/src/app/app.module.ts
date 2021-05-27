import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainMenuComponent } from './components/layout/main-menu/main-menu.component';
import { PrivateMenuComponent } from './components/layout/private-menu/private-menu.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { LogotypeComponent } from './components/ui/logotype/logotype.component';
 
import { PrivatePagesAboutComponent } from './components/private/pages/about/about.component';
import { PrivatePagesInfoComponent } from './components/private/pages/info/info.component';

import { PublicPagesWelcomeComponent } from './components/pages/welcome/welcome.component';
import { PublicPagesAboutComponent } from './components/pages/about/about.component';
import { PublicPagesCatalogComponent } from './components/pages/catalog/catalog.component';
import { PublicPagesInfoComponent } from './components/pages/info/info.component';
import { PublicPagesMainComponent } from './components/pages/main/main.component'; 
 
import { Page404Component } from './components/pages/404/404.component';



import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { NoteDirective } from './directives/note/note.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    PrivateMenuComponent,
    MainContentComponent,
    ButtonComponent,
    LogotypeComponent,
    
    PrivatePagesAboutComponent,
    PrivatePagesInfoComponent,
     
    PublicPagesWelcomeComponent,
    PublicPagesAboutComponent,
    PublicPagesCatalogComponent,
    PublicPagesInfoComponent,
    PublicPagesMainComponent,
    Page404Component,

    ReversePipe,
    NoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
