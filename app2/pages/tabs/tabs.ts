import { Component } from '@angular/core';

import { AlphaPage } from '../alpha/alpha';
import { CategoriesPage } from '../categories/categories';
import { ContactPage } from '../contact/contact';
import { AccueilPage } from '../accueil/accueil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = AlphaPage;
  tab3Root = CategoriesPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
