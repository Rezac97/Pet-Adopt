import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Adoption } from 'src/app/model/adoption.model';

import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css'],
})
export class PetPageComponent implements OnInit {
  petId: number = NaN;
  pets: Pet = new Pet();

  adoptionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.petId = params['id'];
      this.getPet();
    });
  }

  getPet() {
    this.service.getOne(this.petId).subscribe((pet: Pet) => {
      this.pets = pet;
    });
  }

  onSubmit() {
    let adoption: Adoption = new Adoption({
      petId: this.petId,
      petName: this.pets.name,
      name: this.adoptionForm.controls['name'].value,
      contact: this.adoptionForm.controls['contact'].value,
    });
    console.log(this.adoptionForm.value);
    this.service
      .submitAdoptionRequest(adoption)
      .subscribe(() => this.router.navigate(['/adoptions']));
  }
}
