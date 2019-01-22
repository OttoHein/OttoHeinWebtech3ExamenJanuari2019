import { Component, OnInit } from '@angular/core';
import { Recept } from '../models/recept';
import { ReceptService } from '../services/recept.service';

@Component({
  selector: 'app-recept-list',
  templateUrl: './recept-list.component.html',
  styleUrls: ['./recept-list.component.css']
})
export class ReceptListComponent implements OnInit {

  recepts: Recept[];

  constructor(private receptService: ReceptService) { }

  ngOnInit() {
  	this.recepts = this.receptService.getAllRecepts();
  	this.recepts.sort();
	console.log(this.recepts)  
  }

}
