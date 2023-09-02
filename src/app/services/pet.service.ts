import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PetsList } from '../model/pets-list.model';
import { map } from 'rxjs';
import { Pet } from '../model/pet.model';
import { Adoption } from '../model/adoption.model';
import { AdoptionList } from '../model/adoptionsList.model';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) {}

  getAll(params?: any) {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(`${baseUrl}pets`, queryParams).pipe(
      map((data: any) => {
        return new PetsList(data);
      })
    );
  }

  getOne(id: number) {
    return this.http.get(`${baseUrl}pets/${id}`).pipe(
      map((data: any) => {
        return new Pet(data);
      })
    );
  }

  submitAdoptionRequest(data: Adoption) {
    return this.http.post(`${baseUrl}adoptions`, data);
  }

  getAdoptions() {
    return this.http.get(`${baseUrl}adoptions`).pipe(
      map((data: any) => {
        return new AdoptionList(data);
      })
    );
  }
}
