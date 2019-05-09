import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  error: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = <User>{};
  }

  cadastrar(){
    this.authenticationService.register(this.user);
  }

}
