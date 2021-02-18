import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestoService {

  RESTAURANTS = "http://localhost:3000/restaurants";
  constructor(private http: HttpClient) { }

  getResto() {
      return this.http.get(this.RESTAURANTS);
  }

  saveResto(data) {
      return this.http.post(this.RESTAURANTS,data);
  }

  deleteResto(id) {
    return this.http.delete(`${this.RESTAURANTS}/${id}`);
  }
}
