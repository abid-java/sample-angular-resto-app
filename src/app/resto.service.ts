import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestoService {

  GET_RESTAURANTS = "http://localhost:3000/restaurants";
  constructor(private http: HttpClient) { }

  getRestaurants() {
      return this.http.get(this.GET_RESTAURANTS);
  }
}
