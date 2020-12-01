import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { APropotComponent } from '../a-propot/a-propot.component';
import { CollectionsComponent } from '../collections/collections.component';
import { NosBoutiquesComponent } from '../nos-boutiques/nos-boutiques.component';
import { ContactComponent } from '../contact/contact.component';
import { PanierComponent } from '../panier/panier.component';
export const route: Routes = [
  { path: 'home',  component: MenuComponent },
  { path: 'propot',  component: APropotComponent },
  { path: 'collections',     component: CollectionsComponent },
  {path: 'boutiques', component:NosBoutiquesComponent},
  { path: 'contact',  component: ContactComponent },
  { path: 'panier',  component: PanierComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];