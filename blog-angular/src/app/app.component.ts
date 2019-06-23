import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
 
  title = 'blog-angular';
  identity: any;
  token: any;

  constructor(public _userService: UserService)
  {
    this.loadUser();
  }

  ngDoCheck()
  {
    // Cada vez que se produsca un cambio este metodo se llama
    // Y yo juraba que era el Onchangues
    this.loadUser();

  }
  ngOnInit()
  {

  }

  loadUser()
  {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken(); 
  }

}
