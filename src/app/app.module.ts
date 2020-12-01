import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CollectionsComponent } from './collections/collections.component';
import { NosBoutiquesComponent } from './nos-boutiques/nos-boutiques.component';
import { APropotComponent } from './a-propot/a-propot.component';
import { ContactComponent } from './contact/contact.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CollectionsComponent,
    NosBoutiquesComponent,
    APropotComponent,
    ContactComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
