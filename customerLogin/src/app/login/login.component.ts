import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserServiceService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private http:HttpClient,private userService : UserServiceService) {
    this.myForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    let body = this.myForm.value;
    console.log(body);
    this.http.post<any>('http://localhost:8080/customer/login',body).subscribe(
      //subscribe has 2 things 1st response,error
      (response)=>{ //next
        console.log(response.userId);
        let activeUser=response.userId;
        console.log("in response");
        this.userService.setCurrentUser(activeUser);
        this.router.navigate(['list']);
      },
      (error)=>{//error
        console.log(error);
        console.log("inn error");
        alert("INVALID CREDENTIALS");
      },
      ()=>{//complete
        console.log("in complete");
      }
    )
  }

}
