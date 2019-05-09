
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { EventosListComponent } from './eventos/eventos-list/eventos-list.component';
import { LoginComponent } from './auth/login/login.component';
import { EventosIndexComponent } from './eventos/eventos-index/eventos-index.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  {
    path: 'eventos', children:
    [
      { path: '', pathMatch: 'full', component: EventosIndexComponent, canActivate: [AuthGuard] },
      { path: 'listar', component: EventosListComponent },
    ]
  },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
