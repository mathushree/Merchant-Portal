import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerlistComponent } from "./customerlist/customerlist.component";
import { HomeComponent } from './home/home.component'; 
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [ 

];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CustomerdetailComponent,
        HomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerlistComponent,
        HttpClientModule
    ]
})
export class AppModule { }
