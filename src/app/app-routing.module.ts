import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "../app/about/about.component";
import { HomeComponent } from "../app/home/home.component";
import { RegistrationComponent } from "../app/registration/registration.component";
import { DetailsComponent } from "../app/details/details.component";

const routes: Routes = [
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Registration',
    component: RegistrationComponent
  },
  {
    path: 'Details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
