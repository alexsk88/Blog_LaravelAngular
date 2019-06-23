import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit 
{

  page_title = 'Ajustes de Usuario'
  user: User;
  identity;
  token;
  status = '';
  opcionesfroala: Object = {
    toolbarButtons: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 
        'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle',
         'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify',
         'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent',
          'indent', 'quote']
      },
      'moreMisc': {
        'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 
        'selectAll', 'html', 'help'],
        'buttonsVisible': 6
      }
    }
  };


  constructor(private _userService: UserService)
  {
    this.user = new User(1,'','','ROLE_USER','','','','');

    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();

    // PARCHE RECHAMBON,
    // PERO ESTO ES POR SER REBELDE Y NO SEGUIR AL PIE DE LA 
    // LETRA EL CURSO Y QUERER CCAMBIAR

    let id;

    if(this.identity.sub)
    {
      id = this.identity.sub;
    }
    else{
      id = this.identity.id;
    }
    // FIN DEL PARCHE

    this._userService.traerUser(id).subscribe(
      datosuser =>
      {
        delete datosuser.user['created_at'];
        delete datosuser.user['updated_at'];
        delete datosuser.user['remember_token'];
        // console.log(datosuser.user);
        this.user = datosuser.user;
      }
    );
  }

  ngOnInit() 
  {
  }

  enviarUpdateUser(form)
  {
    this._userService.updateuser(this.token, this.user).subscribe(
    response =>{
      this.status = "success"
      console.log("WELL Update user", response);

      if(response.status == 'success')
      {
        localStorage.setItem('identity', JSON.stringify(this.user));
      }
    },
    error => 
    {
      console.log("Error Update user", error); 
      this.status = "Hya un error en algun lado ajjaja arregls"
    }
    );
  }

}
