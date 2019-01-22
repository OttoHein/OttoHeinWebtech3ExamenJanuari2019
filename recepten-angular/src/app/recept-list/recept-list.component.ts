import { Component, OnInit } from '@angular/core';
import { Recept } from '../models/recept';

@Component({
  selector: 'app-recept-list',
  templateUrl: './recept-list.component.html',
  styleUrls: ['./recept-list.component.css']
})
export class ReceptListComponent implements OnInit {

  recepts: Recept[];

  constructor() { }

  ngOnInit() {
  }

}
