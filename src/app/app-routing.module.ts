import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PetsComponent } from './core/pets/pets.component';
import { AdoptionsComponent } from './core/adoptions/adoptions.component';
import { PetPageComponent } from './core/pets/pet-page/pet-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'adoptions', component: AdoptionsComponent },
  { path: 'pets/:id', component: PetPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
