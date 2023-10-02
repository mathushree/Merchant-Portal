import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() { }
  sharedCustomerData:any;
  userId=0;
  userSubject = new BehaviorSubject(0);//0-default value 

  setCurrentUser(userId: any) {
    this.userSubject.next(userId);
  }
  getCurrentUser():number {
    this.userSubject.subscribe(currentUser => {
      this.userId= currentUser;
    });
    return this.userId; 
  }

  
}
