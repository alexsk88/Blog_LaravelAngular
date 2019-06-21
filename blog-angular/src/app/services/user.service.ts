import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(public http: HttpClient)
  {

  }
}
