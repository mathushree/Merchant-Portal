import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [ 
  {path:'',component:LoginComponent},
  {path:'list',component:CustomerlistComponent},
  {path:'details',component:CustomerdetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
