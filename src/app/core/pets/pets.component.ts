import { Component, Input, OnInit } from '@angular/core';
import { PetsList } from 'src/app/model/pets-list.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  @Input()
  pageSize: number = 10;

  pets: PetsList = new PetsList();

  params = {
    filter: {
      category: '',
      sex: '',
    },
    sort: '',
  };
  constructor(private service: PetService) {}

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.service.getAll(this.params).subscribe((pets: PetsList) => {
      this.pets = pets;
      console.log(pets);
    });
  }

  getCategory(event: any) {
    console.log(event.target.value);
    this.params.filter.category = event.target.value;
    this.getPets();
  }

  getSex(event: any) {
    console.log(event.target.value);
    this.params.filter.sex = event.target.value;
    this.getPets();
  }

  getSort(event: any) {
    console.log(event.target.value);
    this.params.sort = event.target.value;
    this.getPets();
  }
}
