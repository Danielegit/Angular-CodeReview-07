import { Component, OnInit } from '@angular/core';

//import class from service 
import { PeopleService  } from "../service/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


		//import class from service and add "private peopleService: PeopleService"
		//inside the constructor
 constructor(public peopleService: PeopleService) { }

 submitted: boolean; // added a variable boolean type
 formControls = this.peopleService.form.controls; //added variable 

 showSuccessMessage: boolean; //Added

   ngOnInit() {
  }



onSubmit(){

  this.submitted = true;
// here we said that if the value of the hidden input is null and it's by default null we will insert a new people and when the $key value is not null we will update an existing data 
         
      if(this.peopleService.form.valid){

         if(this.peopleService.form.get("$key").value == null ){ 

                 this.peopleService.insertPeople(this.peopleService.form.value);

         }else{

                  this.peopleService.updatePeople(this.peopleService.form.value);

        }


           this.showSuccessMessage =true;// we set the property to true
           setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false

          this.submitted = false;
          
          this.peopleService.form.reset();// the form will be empty after new record created
           
                } else {
                 //update
         }                 
         
 }
}

