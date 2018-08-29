import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';

import { UtilService } from '../services/util.service';
import { UserService } from '../services/user.service';

import { User } from '../models/user';
import { PanProd } from '../models/pan-prod';
import { Cart } from '../models/cart';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  providers: [UtilService, UserService],
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  formreg: FormGroup;
  formlog: FormGroup;

  display4 : boolean = false;
  display5 : boolean = false;
  blockSpecial: RegExp = /^[^<>*!]+$/;
  phoneNumber: RegExp = /^[0-9]+$/;
  myPanprods: PanProd[]=[];
  myCart = new Cart('', 0, null, null, 0);
  solde: number = 0;
  authCode: string = "";
  goodCode: string = "";
  type: string;
  //email: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(
    private utilService: UtilService,
    private userService: UserService,
    private router : Router,){
      this.myPanprods = utilService.getPanProd();
      this.myCart = utilService.getCart();
      this.solde = utilService.getPrixTotal();
    }

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
      useremail: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  addUser(){
    console.log(this.formreg.value.firstname);
  }

  verifyUser(){
    console.log(this.formlog.value);
  }

  showDialogCode(){
    this.display5 = true;
  }

  showInforms(type: string){
    this.type = type;
    this.display4 = true;
  }

  auth(){
    if(this.authCode == this.goodCode){
          this.router.navigateByUrl('/buy');
    }
  }

  saveInform(){
    //Building informations
    if(this.type==='reg'){
      let client = new User(this.formreg.get('firstname').value,
                            this.formreg.get('lastname').value,
                          this.formreg.get('email').value,
                        this.formreg.get('number').value,
                      this.formreg.get('username').value,
                    this.formreg.get('password').value);
      this.myCart.client = client;
      this.utilService.setCart(this.myCart);
      this.userService.sendEmail(this.formreg.get('lastname').value).subscribe(data => this.goodCode = data.body);
      alert(this.goodCode);
    }
    else if(this.type==='log'){
      let client = new User('', '', '', '', '', '');
      this.userService.auth2(this.formreg.get('email').value).subscribe(data => client = data.body);
      this.myCart.client = client;
      this.utilService.setCart(this.myCart);
      this.router.navigateByUrl('/buy');
    }

    this.showDialogCode();
  }

  passwordMatchValidator(g: FormGroup) {
   return g.get('password').value === g.get('confirm').value
      ? null : {'validPassword': true};
  }

}
