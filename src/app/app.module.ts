import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { FourColumnsComponent } from './Components/four-columns/four-columns.component';
import { SquareButtonComponent } from './Components/square-button/square-button.component';
import { TableDemoComponent } from './Components/table/table.component';
import { SlideComponent } from './Components/slide/slide.component';
import { ShowComponent } from './Components/show/show.component';
import { Item2Component } from './Components/item2/item2.component';
import { EntrepriseComponent } from './Components/entreprise/entreprise.component';
import { ItemComponent } from './Components/item/item.component';
import { VerticalMenuComponent } from './Components/vertical-menu/vertical-menu.component';
import { ModeGestionComponent } from './Components/entreprise/mode-gestion/mode-gestion.component';
import { SystemesProductionComponent } from './Components/entreprise/systemes-production/systemes-production.component';
import { SeperatinglineComponent } from './Components/seperatingline/seperatingline.component';
import { MyCustomComponentComponent } from './Components/my-custom-component/my-custom-component.component';
import { NavactiveComponent } from './Components/navactive/navactive.component';
import { AvantagesComponent } from './Components/avantages/avantages.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { FormulaireComponent } from './Components/formulaire/formulaire.component';
import { FormulairevehiculeComponent } from './Components/formulairevehicule/formulairevehicule.component';
import { FormulaireacceptComponent } from './Components/formulaireaccept/formulaireaccept.component';
import { NouveautesComponent } from './Components/nouveautes/nouveautes.component';
import { ZoneActiviteComponent } from './Components/zone-activite/zone-activite.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChoixsecuriteComponent } from './Components/choixsecurite/choixsecurite.component';
import { AmenagementComponent } from './Components/amenagement/amenagement.component';
import { ProduitsComponent } from './Components/produits/produits.component';
import { VideoComponent } from './Components/video/video.component';
import { PartenairesComponent } from './Components/partenaires/partenaires.component';
import { ReferencesComponent } from './Components/references/references.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    TopbarComponent,
    FooterComponent,
    CarouselComponent,
    ItemComponent,
    Item2Component,
    FourColumnsComponent,
    SquareButtonComponent,
    TableDemoComponent,
    SlideComponent,
    ShowComponent,
    Item2Component,
    EntrepriseComponent,
    VerticalMenuComponent,
    ModeGestionComponent,
    SystemesProductionComponent,
    SeperatinglineComponent,
    MyCustomComponentComponent,
    NavactiveComponent,
    AvantagesComponent,
    FAQComponent,
    ContactsComponent,
    FormulaireComponent,
    FormulairevehiculeComponent,
    FormulaireacceptComponent,
    NouveautesComponent,
    ZoneActiviteComponent,
    ChoixsecuriteComponent,
    AmenagementComponent,
    ProduitsComponent,
    VideoComponent,
    PartenairesComponent,
    ReferencesComponent,
    FooterComponent,
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
