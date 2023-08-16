import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatBreed } from './models/cat-breed.model'; 


@Injectable({
  providedIn: 'root'
})
export class CatFactService {
  private baseUrl = 'https://catfact.ninja/breeds';

  constructor(private http: HttpClient) {}

  getBreeds(page: number, pageSize: number): Observable<CatBreed[]> {
    const url = `${this.baseUrl}?page=${page}&per_page=${pageSize}`;
    return this.http.get<CatBreed[]>(url); 
  }
  
}
