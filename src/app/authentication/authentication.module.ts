import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export  const routes:Routes=[
  {path:'signUp',component:SignUpComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SignUpComponent, LoginComponent, ProfileComponent]
})
export class AuthenticationModule { }
