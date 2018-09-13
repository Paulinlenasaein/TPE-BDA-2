import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  state: number = 1;
  refTransaction: string = "";
  panprods: PanProd[] = [];
  urls: SafeUrl[] = [];

  constructor(private utilService: UtilService,
    private paypalService: PaypalService,
    private omService: OmService,
    private momoService: MomoService,
    private sanitizer: DomSanitizer) {
      this.panprods = utilService.getPanProd();

      for(let pp of this.panprods){
        this.urls.push(this.trustyUrl("localhost:8080/src/assets/products/"+pp.produit.nomProd+".zip"));
      }
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
    this.refTransaction = this.paypalService.transaction(this.cart.client, this.totalsum, this.paymode);
    if(this.refTransaction !== "false"){
      this.message = "Transaction éffectuée avec succès, un mail vous a été envoyé. Réderence de la transaction: "+this.refTransaction;
      this.state = 1;
    }
    else{
      this.message = "Echec de la transaction, le solde de votre carte est insuffisant!";
      this.state = -1;
    }
    this.paymode = "payment";
  }

  trustyUrl(url: string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
