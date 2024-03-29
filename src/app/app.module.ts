import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProfileComponent,
    TableComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
