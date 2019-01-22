import { Injectable } from '@angular/core';
import { Recept } from '../models/recept';

@Injectable({
  providedIn: 'root'
})
export class ReceptService {
  constructor() { }

  getAllRecepts(): Recept[] {
  	var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

  	return values;
  }

  addRecept(recept: Recept) {
  	var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        if (recept.name == keys[i]) {
        	console.log("Duplicate!");
        	return null;
        }
    }

  	return localStorage.setItem(recept.name, JSON.stringify(recept));
  }
}
