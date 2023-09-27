import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { EntrepriseComponent } from './Components/entreprise/entreprise.component';
import { SystemesProductionComponent } from './Components/entreprise/systemes-production/systemes-production.component';
import { AvantagesComponent } from './Components/avantages/avantages.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { NouveautesComponent } from './Components/nouveautes/nouveautes.component';
import { ZoneActiviteComponent } from './Components/zone-activite/zone-activite.component';
import { ChoixsecuriteComponent } from './Components/choixsecurite/choixsecurite.component';
import { AmenagementComponent } from './Components/amenagement/amenagement.component';
import { ProduitsComponent } from './Components/produits/produits.component';
import { ReferencesComponent } from './Components/references/references.component';
import { PartenairesComponent } from './Components/partenaires/partenaires.component';
import { VideoComponent } from './Components/video/video.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    title: 'home'
  },
  {
    path: 'entreprise',
    component: EntrepriseComponent,
    title: 'entreprise'
  },

  {
    path: 'avantages',
    component: AvantagesComponent,
    title: 'Avantages'
  },
  {
    path: 'FAQ',
    component: FAQComponent,
    title: 'FAQ'
  },

  {
    path: 'Contacts',
    component:  ContactsComponent,
    title: 'Contacts'
  },
  {
    path: 'ZoneActivite',
    component: ZoneActiviteComponent,
    title: 'ZoneActivite'
  },


  {
    path: 'SystemesProductionComponent',
    component: SystemesProductionComponent,
    title: 'systemes-production',
  },

  {
    path: 'Choixsecurite',
    component: ChoixsecuriteComponent,
    title: 'Choixsecurite',
  },

  {
    path: 'amenagement',
    component:  AmenagementComponent,
    title: 'Amenagement',
  },

  {
    path: 'Produits',
    component:  ProduitsComponent,
    title: 'Produits',
  },


  {
    path: 'References',
    component:  ReferencesComponent,
    title: 'References',
  },


  {
    path: 'Partenaires',
    component:  PartenairesComponent,
    title: 'Partenaires',
  },


  {
    path: 'Video',
    component:  VideoComponent,
    title: ' Video',
  },





















  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
