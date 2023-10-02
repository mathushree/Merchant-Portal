import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserServiceService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  standalone:true,
  imports: [MatTableModule]
})
export class CustomerlistComponent implements OnInit{
  displayedColumns: string[] = ['Firstname', 'Lastname', 'Address', 'City','State','Phone','Email','Delete','Update'];
  dataSource :any;
  isShowDiv:boolean=false;
  currentUser:number=0;

  constructor(private router :Router,private userService:UserServiceService,private http:HttpClient){

  }

  toggleDisplayDiv(){
     this.router.navigate(['details']);
     
  }
  toggle(id:number){
    this.http.delete<string>('http://localhost:8080/deletecustomer?id='+id).subscribe(
      (response)=>{
        console.log(response);
        this.dataSource=this.deleteCustomerById(id);

      }
    )
  }
     deleteCustomerById(id:number):UserModel[] {
      return this.dataSource.filter((response:UserModel )=> response.id !== id);
  }
  // update(id:number){
  //   this.http.put<String>('http://localhost:8080/updatecustomer',body).subscribe(
  //     (response)=>{
  //       console.log(response);
        
  //     }
  //   )

  // }
  showUpdate(id:number){
    console.log(id);
    let data=this.dataSource.filter((row:UserModel)=>row.id==id)[0];
    console.log(data+" data ");
    this.userService.sharedCustomerData=data;
    console.log(this.userService.sharedCustomerData+" shared");
    this.router.navigate(['/details']);
    
    //1.upadte ->id->showupdate->detailspage->fill->submit->update
    
    
  }
  getcustomers(){
    this.http.get<any>('http://localhost:8080/allCustomersById?userId='+this.currentUser).subscribe(
      (response)=>{
        console.log(response);
        this.dataSource=response;
        
      }
      
    )
  }
    ngOnInit(): void {
    this.currentUser=(this.userService.getCurrentUser());
    console.log(this.currentUser+ "  inside cus list");
    
    if(this.currentUser==0){
      alert("Please login");
      this.router.navigate(['']);
    }
    this.getcustomers();
  }
}

export interface UserModel {
  fname:string;
  lname:string;
  address:string;
  city:string;
  state:string;
  phone:string;
  email :string;
  id:number;
  userId:number;
}




