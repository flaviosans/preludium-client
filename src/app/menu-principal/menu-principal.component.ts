import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {


  constructor(private authenticationService: AuthenticationService) {  }

  ngOnInit() { }

  logout(){
    this.authenticationService.logout();
  }

}
