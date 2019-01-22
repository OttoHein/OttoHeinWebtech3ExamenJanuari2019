import { Component, OnInit } from '@angular/core';
import { Recept } from '../models/recept';

@Component({
  selector: 'app-recept-form',
  templateUrl: './recept-form.component.html',
  styleUrls: ['./recept-form.component.css']
})
export class ReceptFormComponent implements OnInit {

  model = new Recept('',null,'',null);

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	
  }

}
