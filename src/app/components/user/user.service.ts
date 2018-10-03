import { User } from '../../models/user.model';
import { UserStore } from '../../store/user.store';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private userStore: UserStore
  ) { }


  addOrUpdateUser(userPayload) {
    const url = environment.userUrl;
    if (this.userStore.user && this.userStore.user.userId) {
      userPayload.userId = this.userStore.user.userId;
      return this.http.put(url, userPayload);
    }
    return this.http.post(url, userPayload);
  }

  generateUserPayload(userData) {
    const user = new User();
    user.title = userData.title.value;
    user.firstName = userData.firstName.value;
    user.lastName = userData.lastName.value;
    user.phoneNumber = userData.phoneNumber.value;
    user.email = userData.email.value;
    user.dob = `${userData.day.value}-${userData.month.value}-${userData.year.value}`;
    return user;
  }

  getUserFormData(userData) {
    const user = this.parseUserData(userData);
    const dob = userData.dob.split('-');
    user['day'] = dob[0];
    user['month'] = dob[1];
    user['year'] = dob[2];
    return user;
  }

  parseUserData(userData) {
    const { title, firstName, lastName, phoneNumber, email } = userData;
    const user = { title, firstName, lastName, phoneNumber, email };
    return user;
  }


}
