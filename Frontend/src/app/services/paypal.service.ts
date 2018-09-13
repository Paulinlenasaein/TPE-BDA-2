import { Injectable } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../models/user';

@Injectable()
export class PaypalService {

  static cardAmount = 500000000;
  ref: any;

  constructor(private userService: UserService) { }

  transaction(client: User, amount: number, paymode: string){
    if(amount < PaypalService.cardAmount){
      this.setCardAmount(amount * -1);
      this.userService.sendEmailTransaction(client.email, client.firstName, client.lastName, amount, paymode).subscribe(data => this.ref = data.body);
      return this.ref.code;
    }
    else{
      return "false";
    }
  }

  getCardAmount(){
    return PaypalService.cardAmount;
  }

  setCardAmount(amount: number){
    PaypalService.cardAmount += amount;
  }

}
