import { Injectable } from '@angular/core';

import { UserService } from '../services/user.service';

@Injectable()
export class PaypalService {

  static cardAmount = 1000000;
  message: string;

  constructor() { }

  transaction(infos: any){
    if(infos.amount < PaypalService.cardAmount){
      this.setCardAmount(infos.amount * -1);
      //this.userService.sendEmailTransaction(infos.email).subscribe(data => this.message = data.body);
      return this.message;
    }
    else{
      return "Echec de la transaction, le solde de votre carte est insuffisant!"
    }
  }

  getCardAmount(){
    return PaypalService.cardAmount;
  }

  setCardAmount(amount: number){
    PaypalService.cardAmount += amount;
  }

}
