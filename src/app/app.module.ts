import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { EventosIndexComponent } from './eventos/eventos-index/eventos-index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { EventoService } from './services/evento.service';
import { EventosListComponent } from './eventos/eventos-list/eventos-list.component';
import { EventosFormComponent } from './eventos/eventos-form/eventos-form.component';
import { EventosEditComponent } from './eventos/eventos-edit/eventos-edit.component';
import { EventosCreateComponent } from './eventos/eventos-create/eventos-create.component';
import { LoginComponent} from "./auth/login/login.component";
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './user/user.component';
import { ErrorInterceptor, JwtInterceptor } from "./helpers";
import { ConfigComponent } from './config/config.component';
import { AuthGuard } from "./guards/auth.guard";
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    EventosIndexComponent,
    EventosListComponent,
    EventosCreateComponent,
    EventosEditComponent,
    DashboardComponent,
    EventosFormComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ConfigComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: AppComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'eventos/editar/:id', component: EventosEditComponent, canActivate: [AuthGuard] },
      { path: 'eventos/novo', component: EventosCreateComponent, canActivate: [AuthGuard] },
      { path: 'eventos', component: EventosIndexComponent, canActivate: [AuthGuard] },
      { path: 'index', component: IndexComponent }
    ])
  ],
  providers: [
    EventoService,
	{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
