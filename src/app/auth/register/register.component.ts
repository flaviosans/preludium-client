import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../models/user";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  error: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.user = <User>{};
  }

  cadastrar(){
    this.authenticationService.register(this.user);
  }

}
