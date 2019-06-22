import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  page_title = "Loggeate"
  user: User;
  status: string;
  token:string;
  identity: string;

  constructor(private _userService: UserService)
  {
    this.user = new User(1,'','','ROLE_USER','','','','');

  }

  ngOnInit()
  {

  }
  
  enviarLogin(form)
  {
    this._userService.signup(this.user).subscribe(
      response => 
      {
        console.log("RSA",response);
        // Token
        this.status = 'success';
        this.token = response;

        this._userService.signup(this.user, true).subscribe(
          response => 
          {
            console.log("RSA",response);
            // User information
            this.identity = response;

            console.log("toke", this.token);
            console.log("User identidaD", this.identity);

            // PERSISTIR DATOS

            localStorage.setItem('token', this.token);
            localStorage.setItem('identity', JSON.stringify(this.identity));

          },
            error =>
          {
            console.log("Error" , error);
            this.status = 'error';  
          }
        );
          
      },
        error =>
      {
        console.log("Error" , error);
        this.status = 'error';  
      }
    );
  }

}
