import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { observable, action, autorun } from 'mobx';

import { User } from '../models/user.model';


@Injectable()
export class UserStore {

  @observable user: User;

  @observable userId: string;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.userId) {
      this.user = localStorage.userId;
    }
    autorun(() => {
      if (this.userId) {
        localStorage.userId = this.userId;
        this.router.navigate(['/order']);
      }
    });
  }


  @action saveUser(userPayload) {
    this.addOrUpdateUser(userPayload).subscribe((resp: any) => {
      this.userId = resp.userId;
    });
  }

  addOrUpdateUser(userPayload) {
    const url = environment.userUrl;
    if (this.userId) {
      userPayload.userId = this.userId;
      return this.http.put(url, userPayload);
    }
    return this.http.post(url, userPayload);
  }


}
