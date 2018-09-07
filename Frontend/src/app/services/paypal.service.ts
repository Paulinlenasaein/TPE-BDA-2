import { Injectable } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../models/user';

@Injectable()
export class PaypalService {

  static cardAmount = 1000000;
  state: number;

  constructor(private userService: UserService) { }

  transaction(client: User, amount: number){
    if(amount < PaypalService.cardAmount){
      this.setCardAmount(amount * -1);
      this.userService.sendEmailTransaction(client.email, client.firstName, client.lastName).subscribe(data => this.state = data.body);
      return this.state;
    }
    else{
      return
    }
  }

  getCardAmount(){
    return PaypalService.cardAmount;
  }

  setCardAmount(amount: number){
    PaypalService.cardAmount += amount;
  }

}
