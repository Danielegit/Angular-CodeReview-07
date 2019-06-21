import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../service/people.service";//added injection


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

peopleArray =[]; // new array it will contain people from database

showDeletedMessage : boolean;// added

searchText:string = "";// search bar text

//added object PeopleService
constructor(public peopleService: PeopleService) { }

  ngOnInit() {//get people from database
  	this.peopleService.getPeople().subscribe(
                 (list) => {
                         this.peopleArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
  }



    onDelete($key){
         if(confirm("Are you sure you want to delete this record?")){
            this.peopleService.deletePeople($key);
            this.showDeletedMessage = true;
            setTimeout(()=> this.showDeletedMessage=false , 3000)
           }
       }

    filterCondition(people){
         return people.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
       }
}
