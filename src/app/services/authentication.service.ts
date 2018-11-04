import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from "../models/user";
import { Router } from "@angular/router"

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    url: string = "http://localhost:8000/api/";

    constructor(private http: HttpClient,
                private router: Router) { }

    login(user: User) {
        return this.http.post<any>(this.url + 'login', user)
            .pipe(map(user => {
                this.recordSession(user);
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login'])

    }

    register(user: User){
        this.http.post<any>(this.url + "register", user)
            .subscribe(user => {
                this.recordSession(user);
                this.router.navigate(['eventos']);
            });

    }

    recordSession(user){
        if(user && user.success.token){
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
    }
}