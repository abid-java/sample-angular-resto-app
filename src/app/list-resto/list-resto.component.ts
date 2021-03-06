import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  restaurants: any = [];
  constructor( private resto: RestoService ) { }

  ngOnInit(): void {
      this.resto.getResto().subscribe((response) => {
        console.warn(response);
        this.restaurants = response;
      });
  }

  deleteResto(id) {
    this .restaurants.splice(id-1,1);
    this.resto.deleteResto(id).subscribe((response) => {
      console.warn('result', response);
    });
  }

}
