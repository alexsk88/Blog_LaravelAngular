import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  page_title = 'Registrate';
  user: User;

  constructor(private _userService: UserService)
  {

    this.user = new User(1,'','','ROLE_USER','','','','');
  }

  enviarRegistro(form)
  {
    console.log(this.user);
    // Llamar el servicio
    form.reset();
    
  }

  ngOnInit() {
  }

}
