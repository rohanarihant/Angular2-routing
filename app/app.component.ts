import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Routing in Angular2 </h1>
    		<nav>
    		<a routerLink="/users" routerLinkActive="active">Users</a>
    		<a routerLink="/signup" routerLinkActive="active">Signup</a>
    		<a routerLink="/login" routerLinkActive="active">Login</a>
    		</nav>
    		 <router-outlet></router-outlet>`
})
export class AppComponent { }
