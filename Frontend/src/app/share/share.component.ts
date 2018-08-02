import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  user : User;

  formreg: FormGroup;
  formlog: FormGroup;

  display4 : boolean = false;
  blockSpecial: RegExp = /^[^<>*!]+$/;
  phoneNumber: RegExp = /^[0-9]+$/;
  //email: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor() { }

  ngOnInit() {
    this.formreg = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.minLength(0), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}'), Validators.maxLength(9)]),
      username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirm: new FormControl('', [Validators.required, Validators.minLength(5)])
    }, this.passwordMatchValidator)

    this.formlog = new FormGroup({
      useremail: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  addUser(){
    console.log(this.formreg.value.firstname);
  }

  verifyUser(){
    console.log(this.formlog.value);
  }

  showInforms(){
    this.display4 = true;
  }

  saveInform(){
    this.display4 = false;
  }

  passwordMatchValidator(g: FormGroup) {
   return g.get('password').value === g.get('confirm').value
      ? {'validPassword': true} : null;
  }

}
