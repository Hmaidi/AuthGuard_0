import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { EventsSpecComponent } from './events-spec/events-spec.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/events',
    pathMatch: 'full'
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'register', component : RegisterComponent
  },
  {
    path : 'events', component : EventsComponent
  },
  {
    path : 'eventsSpec', component : EventsSpecComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
