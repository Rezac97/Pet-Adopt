import { Component, OnInit } from '@angular/core';
import { Adoption } from 'src/app/model/adoption.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-delete',
  templateUrl: './pet-delete.component.html',
  styleUrls: ['./pet-delete.component.css'],
})
export class PetDeleteComponent implements OnInit {
  adoptions: Adoption[] = [];

  constructor(private service: PetService) {}

  ngOnInit(): void {
    this.getAdoptions();
  }

  getAdoptions() {
    this.service
      .getAdoptions()
      .subscribe((data) => (this.adoptions = data.results));
  }
}
