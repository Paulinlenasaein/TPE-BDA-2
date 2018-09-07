import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

import { UtilService } from '../services/util.service';
import { PaypalService } from '../services/paypal.service';
import { OmService } from '../services/om.service';
import { MomoService} from '../services/momo.service';

import { Cart } from '../models/cart';
import { PanProd } from '../models/pan-prod';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
    providers: [UtilService, PaypalService, OmService, MomoService],
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  paymode: string = "notchoose";
  cart = new Cart('', 0, null, null, 0);
  totalsum: number = 0;
  totalsumd: number = 0;
  totalsume: number = 0;
  countries: any = [];
  formpaypal: FormGroup;
  message: string = "";
  state: number;
  panprods: PanProd[] = [];

  constructor(private utilService: UtilService,
    private paypalService: PaypalService,
    private omService: OmService,
    private momoService: MomoService) {
      this.panprods = utilService.getPanProd();
    }

  ngOnInit() {
    this.utilService.setComponent("buy");
    this.cart = this.utilService.getCart();
    this.totalsum = this.utilService.getPrixTotal();
    this.totalsumd = this.utilService.roundDecimal(this.totalsum * 0.0018, 2);
    this.totalsume = this.utilService.roundDecimal(this.totalsum * 0.0015, 2);

    this.formpaypal = new FormGroup({
      country: new FormControl('', [Validators.required]),
      cardnumber: new FormControl('', [Validators.required]),
      paymode: new FormControl('', [Validators.required]),
      exp: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required]),
    });

    this.countries = [
                    	{country: "Afghanistan"},
                    	{country: "Afrique du Sud"},
                    	{country: "Albanie"},
                    	{country: "Algérie"},
                    	{country: "Allemagne"},
                    	{country: "Andorre"},
                    	{country: "Angola"},
                    	{country: "Anguilla"},
                    	{country: "Antarctique"},
                    	{country: "Antigua-et-Barbuda"},
                    	{country: "Antilles néerlandaises"},
                    	{country: "Arabie saoudite"},
                    	{country: "Argentine"},
                    	{country: "Arménie"},
                    	{country: "Aruba"},
                    	{country: "Australie"},
                    	{country: "Autriche"},
                    	{country: "Azerbaïdjan"},
                    	{country: "Bahamas"},
                    	{country: "Bahreïn"},
                    	{country: "Bangladesh"},
                    	{country: "Barbade"},
                    	{country: "Bélarus"},
                    	{country: "Belgique"},
                    	{country: "Belize"},
                    	{country: "Bénin"},
                    	{country: "Bermudes"},
                    	{country: "Bhoutan"},
                    	{country: "Bolivie"},
                    	{country: "Bosnie-Herzégovine"},
                    	{country: "Botswana"},
                    	{country: "Brésil"},
                    	{country: "Brunéi Darussalam"},
                    	{country: "Bulgarie"},
                    	{country: "Burkina Faso"},
                    	{country: "Burundi"},
                    	{country: "Cambodge"},
                    	{country: "Cameroun"},
                    	{country: "Canada"},
                    	{country: "Cap-Vert"},
                    	{country: "Ceuta et Melilla"},
                    	{country: "Chili"},
                    	{country: "Chine"},
                    	{country: "Chypre"},
                    	{country: "Colombie"},
                    	{country: "Comores"},
                    	{country: "Congo-Brazzaville"},
                    	{country: "Corée du Nord"},
                    	{country: "Corée du Sud"},
                    	{country: "Costa Rica"},
                    	{country: "Côte d’Ivoire"},
                    	{country: "Croatie"},
                    	{country: "Cuba"}
                    ]
  }

  paypal(){
    this.paymode = "PayPal";
  }

  om(){
    this.paymode = "Orange Money";
  }

  momo(){
    this.paymode = "Mobile Money";
  }

  pay(){
    this.state = this.paypalService.transaction(this.cart.client, this.totalsum);
    if(this.state == 1){
      this.message = "Transaction éffectuée avec succès, un mail vous a été envoyé contenant la référence!"
    }
    else{
      this.message = "Echec de la transaction, le solde de votre carte est insuffisant!"
    }
    this.paymode = "payment";
  }
}
