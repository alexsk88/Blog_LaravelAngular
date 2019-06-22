import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';
  identity: any;
  token: any;

  constructor(public _userService: UserService)
  {
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken(); 
  }
}
