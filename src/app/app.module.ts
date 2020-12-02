import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ItemComponentComponent } from './item-component/item-component.component';
import {MatGridListModule} from '@angular/material/grid-list';
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
    PanierComponent,
    ItemComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
