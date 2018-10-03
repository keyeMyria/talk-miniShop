import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Utils } from '../utils/utils';
import { UserDetailsService } from './user-details.service';
import { RegExEnum } from './../enum/regex.enum';
import { User } from './../models/user.model';
import { UserStore } from './../store/user.store';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [UserDetailsService]
})

export class UserDetailsComponent implements OnInit {

  submitted = false;
  userDetailsForm: FormGroup;

  // validation patterns
  validationPattern = {
    firstname: RegExEnum.NAME,
    lastname: RegExEnum.NAME,
    mobile: RegExEnum.MOBILE,
    email: RegExEnum.EMAIL
  };

  dayList: Array<string> = [''];
  yearList: Array<string> = [''];
  monthList: Array<string> = Utils.getMonthList();
  titleList: Array<string> = Utils.getTitleList();

  constructor(private formBuilder: FormBuilder, private userDetailsService: UserDetailsService,
    private userStore: UserStore, private router: Router) { }

  ngOnInit() {
    // initialize default value, set validations
    this.initializeForm();

    // generate the day, month and year dropdowns
    this.dayList = Utils.getDayList();
    this.yearList = Utils.getYearList();
  }

  initializeForm() {
    if (this.userStore && this.userStore.user && this.userStore.user.userId) {
      const userData = this.userDetailsService.getUserFormData(this.userStore.user);
      this.userDetailsForm = this.formBuilder.group(this.getUserFilledFormData(userData));
    } else {
      this.userDetailsForm = this.formBuilder.group(this.getInitialFormData());
    }
  }


  onSubmit() {
    this.submitted = true;
    if (this.userDetailsForm.invalid) {
      return;
    }
    const user: User = this.userDetailsService.generateUserPayload(this.userDetailsForm.controls);
    this.userDetailsService.addOrUpdateUser(user).subscribe((resp) => {
      delete resp['_id'];
      this.userStore.refreshUser(resp);
      this.router.navigate(['/confirm']);
    });
  }

  // getter for easy access to form fields
  get f() { return this.userDetailsForm.controls; }

  getInitialFormData() {
    return {
      title: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.pattern(this.validationPattern.firstname)])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern(this.validationPattern.lastname)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.validationPattern.email)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(this.validationPattern.mobile)])],
      day: [''],
      month: [''],
      year: ['']
    };
  }

  getUserFilledFormData(userData) {
    return {
      title: [userData.title, Validators.required],
      firstName: [userData.firstName,
      Validators.compose([Validators.required, Validators.pattern(this.validationPattern.firstname)])],
      lastName: [userData.lastName,
      Validators.compose([Validators.required, Validators.pattern(this.validationPattern.lastname)])],
      email: [userData.email,
      Validators.compose([Validators.required, Validators.pattern(this.validationPattern.email)])],
      phoneNumber: [userData.phoneNumber,
      Validators.compose([Validators.required, Validators.pattern(this.validationPattern.mobile)])],
      day: [userData.day],
      month: [userData.month],
      year: [userData.year]
    };
  }
}
