import { Component, OnInit } from '@angular/core';
import { Recept } from '../models/recept';
import { ReceptService } from '../services/recept.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recept-form',
  templateUrl: './recept-form.component.html',
  styleUrls: ['./recept-form.component.css']
})
export class ReceptFormComponent implements OnInit {

  model = new Recept('',null,'',null);

  constructor(private router: Router,
  	private receptService: ReceptService) { }

  ngOnInit() {
  }

  onSubmit() {
  	this.receptService.addRecept(this.model);
  	this.router.navigate(['/list']);
  }

}
