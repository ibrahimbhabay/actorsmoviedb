import { Component } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'w8ang'
  car = {
    id: '',
    maker: "",
    model: "",
    year: "",
    address: "",
    state: "",
    postCode: "",
    bodyType: ""
  }

  db = [];

  saveCar() {
    this.car.id = uuid.v4();
    this.db.push(this.car);
    this.car = Object.create(this.car);
  }

  deleteCar(id) {
    console.log(id);
    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].id === id) {
        this.db.splice(i, 1);
        break;
      }
    }
  }
  getOldCarsNumber() {
    let counter = 0;

    this.db.forEach(car => {
      if (car.year < 2000)
        counter++;
    })

    return counter;
  }

  deleteOldCars() {
    let i = 0;
    while (i < this.db.length) {
      if (this.db[i].year < 2000)
        this.db.splice(i, 1);
      else i++;

    }

  }

}
