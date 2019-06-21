import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//reative form module
import { ReactiveFormsModule ,FormsModule } from "@angular/forms";
//reative form module -end

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  firebase
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
//  firebase-end

import { HomePageComponent } from './home-page/home-page.component';
import { PagImpNumbersComponent } from './pag-imp-numbers/pag-imp-numbers.component';
import { PagPhoneBookComponent } from './pag-phone-book/pag-phone-book.component';
import { HeadNavbarComponent } from './head-navbar/head-navbar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people-list/people-list.component';


//import the class PeopleService from service
import { PeopleService } from "./service/people.service";

//import the class PeopleService from service__end

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PagImpNumbersComponent,
    PagPhoneBookComponent,
    HeadNavbarComponent,
    FootBarComponent,
    PeopleComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //reative form module
    ReactiveFormsModule,//reative form module -end


//  firebase
   AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   AngularFireDatabaseModule, // we will import the classes here too 


   FormsModule //add form

//  firebase-end
  ],
  providers: [PeopleService], //import the class PeopleService as provider
  bootstrap: [AppComponent]
})
export class AppModule { }
