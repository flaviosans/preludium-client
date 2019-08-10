import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../../services/authentication.service';
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: '';

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.user = <User>{};
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  logar() {
    this.submitted = true;

    this.loading = true;
    this.authenticationService.login(this.user)
        .pipe(first())
        .subscribe(_ => {
          this.router.navigate(['/eventos']);
        }, error => {
          this.error = error;
          this.loading = false;
        });
  }

}
