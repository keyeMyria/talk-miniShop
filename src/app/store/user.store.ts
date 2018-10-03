import { Injectable } from '@angular/core';
import { observable, action, autorun } from 'mobx';

import { User } from '../models/user.model';


@Injectable()
export class UserStore {

  @observable user: User;

  constructor() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
    }
    autorun(() => {
      if (this.user) {
        localStorage.user = JSON.stringify(this.user);
      }
    });
  }

  @action refreshUser(user) {
    this.user = new User();
    this.user = user;
  }


}
