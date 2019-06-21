import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { PagImpNumbersComponent } from './pag-imp-numbers/pag-imp-numbers.component';
import { PagPhoneBookComponent } from './pag-phone-book/pag-phone-book.component';

const routes: Routes = [

{
	path:"",component: HomePageComponent
},

{
	path:"app-pag-imp-numbers",component: PagImpNumbersComponent
},

{
	path:"app-pag-phone-book",component: PagPhoneBookComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
