import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { HomeComponent } from './core/home/home.component';
import { PetsComponent } from './core/pets/pets.component';
import { AdoptionsComponent } from './core/adoptions/adoptions.component';
import { HttpClientModule } from '@angular/common/http';
import { PetItemComponent } from './core/pets/pet-item/pet-item.component';
import { PetPageComponent } from './core/pets/pet-page/pet-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetDeleteComponent } from './core/pets/pet-delete/pet-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    PetsComponent,
    AdoptionsComponent,
    PetItemComponent,
    PetPageComponent,
    PetDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
