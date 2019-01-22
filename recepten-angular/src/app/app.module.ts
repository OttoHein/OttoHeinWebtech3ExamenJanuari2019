import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptFormComponent } from './recept-form/recept-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceptListComponent } from './recept-list/recept-list.component';
import { ReceptService } from './services/recept.service';

// define the routes
const appRoutes: Routes = [
  { path: 'list', component: ReceptListComponent },
  { path: 'add', component: ReceptFormComponent }
  //{ path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReceptFormComponent,
    ReceptListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ReceptService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
