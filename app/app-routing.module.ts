import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{ path: '',
    redirectTo: '/users',
    pathMatch: 'full'
},
{ path: 'users', component: UsersComponent},
{ path: 'login', component: LoginComponent},
{ path: 'signup', component: SignupComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



export const routedComponents = [LoginComponent, SignupComponent, UsersComponent];
