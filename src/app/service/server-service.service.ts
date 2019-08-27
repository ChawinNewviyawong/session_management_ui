import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Profile } from 'selenium-webdriver/firefox';

const headers = new HttpHeaders();
headers.append("Content-Type", "application/json");
// headers.append("Authorization", localStorage.getItem('accessToken'));

@Injectable({
  providedIn: 'root'
})

export class ServerServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(user) {
    let body = {
      username: user.username,
      password: user.password
    }
    return this.httpClient.post<any>("http://localhost:3000/login", body, { headers, observe: 'response' })
      .pipe(
        catchError(this.handleError)
      )
  }

  logout(user) {
    let body = {
      username: user.username,
      sid: sessionStorage.getItem("sid")
    }
    return this.httpClient.post<any>("http://localhost:3000/logout", body, { headers, observe: 'response' })
      .pipe(
        catchError(this.handleError)
      )
  }

  getAllCars() {
    let body = {
      sid: sessionStorage.getItem('sid'),
    }
    return this.httpClient.post<any>('http://localhost:3000/getAllCars', body, { headers: headers, observe: 'response' })
      .pipe(
        catchError(this.handleError)
      )
  }

  addCar(car) {
    let body = {
      car: car,
      sid: sessionStorage.getItem('sid'),
    }
    return this.httpClient.post<any>('http://localhost:3000/addCar', body, { headers: headers, observe: 'response' })
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      error);
  };
}
