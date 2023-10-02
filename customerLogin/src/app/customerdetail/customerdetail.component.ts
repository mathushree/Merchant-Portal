import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user.service';
@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {
  fname:string='';
  lname:string='';
  address:string='';
  city:string='';
  state:string='';
  phone:string='';
  email :string='';
  myForm: FormGroup;
  receivedCustomerData:any;
  ngOnInit(): void {
      this.receivedCustomerData=this.userservice.sharedCustomerData;
      if(this.receivedCustomerData!=undefined){
        this.myForm=new FormGroup({ //line represents passing an  form group objects as an argument
          //  ->the object define property of formgroups
          fname: new FormControl(this.receivedCustomerData.fname ),
          lname: new FormControl(this.receivedCustomerData.lname ),
          address:new FormControl(this.receivedCustomerData.address ),
          city:new FormControl(this.receivedCustomerData.city ),
          state:new FormControl(this.receivedCustomerData.state ),
          phone:new FormControl(this.receivedCustomerData.phone ),
          email:new FormControl(this.receivedCustomerData.email ),
        });
        console.log("in");
      }
  }
  constructor(private router: Router,private fb:FormBuilder,private http:HttpClient,private userservice:UserServiceService){
    console.log("2");
    this.myForm = fb.group({ //line represents passing an  form group objects as an argument
      //  ->the object define property of formgroups
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
    });
  }
  closeform(){
    this.router.navigate(['list']);
  }
  submit(){
    if (this.receivedCustomerData!=undefined) {
      let body=this.myForm.value;
      body.userId=this.userservice.getCurrentUser();
      body.id=this.receivedCustomerData.id;
      this.http.put<any>('http://localhost:8080/updatecustomer',body).subscribe(
       (response)=>{
         let customerdetail=response;
         alert("customer updated");
         this.router.navigate(['list']);
        },
        (error)=>{
          alert("please try again later..");
        }
        
      )
    } else {
      console.log(this.myForm.value);
      let body=this.myForm.value;
      body.userId=this.userservice.getCurrentUser();
      this.http.post<any>('http://localhost:8080/create',body).subscribe(
       (response)=>{
         let customerdetail=response;
         console.log(response);
       }
      )
       this.router.navigate(['list']);
    }
    this.receivedCustomerData=undefined;
    this.userservice.sharedCustomerData=undefined;
  }
}
