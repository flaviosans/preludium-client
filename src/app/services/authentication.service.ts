import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from "../models/user";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    url: string = "http://localhost:8000/api/";

    constructor(private http: HttpClient) { }

    login(user: User) {
        return this.http.post<any>(this.url + 'login', user)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.success.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');

    }
}