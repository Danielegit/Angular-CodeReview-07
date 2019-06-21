import { Injectable } from '@angular/core';

// form 
import { FormControl , FormGroup , Validators } from "@angular/forms";

// form end

//import validators


//import AngularFireDatabase, AngularFireList CRUD
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private firebase: AngularFireDatabase) { } //adding obj database



	peopleList: AngularFireList<any>; //added, it will save all the people inserted

  // form 
	form = new FormGroup({
     $key: new FormControl(null),
     firstName: new FormControl('', Validators.required),
     lastName: new FormControl('', Validators.required),
     phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)])
         });// form end


	 getPeople(){
                 this.peopleList = this.firebase.list('people');
                 return this.peopleList.snapshotChanges();
         }  /*
The function getPeople() will retrieve all people from inside this Firebase
 project that we have stored under this people’s node in our Firebase, 
 then we will return the people list by calling this function snapshotChanges().*/


insertPeople(people){//in order to insert a new record into firebase database
         this.peopleList.push({
                 firstName: people.firstName,
                 lastName: people.lastName,
                 phoneNumber: people.phoneNumber

          });
         }

 populateForm(people){
		this.form.setValue(people);
 }



updatePeople(people){
		    this.peopleList.update(people.$key,{
                 firstName: people.firstName,
                 lastName: people.lastName,
                 phoneNumber: people.phoneNumber
   
		    });
  }


deletePeople($key: string){
		    this.peopleList.remove($key);
		  }

}
