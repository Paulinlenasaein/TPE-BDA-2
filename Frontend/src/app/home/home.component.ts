import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/api';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SpinnerModule} from 'primeng/spinner';
import {PaginatorModule} from 'primeng/paginator';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { UtilService } from '../services/util.service';
import { ProductService } from '../services/product.service';
import { PromotionService } from '../services/promotion.service';
import { UserService } from '../services/user.service';

import { Product } from '../models/product';
import { Promotion } from '../models/promotion';
import { Cart } from '../models/cart';
import { PanProd } from '../models/pan-prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [UtilService, ProductService, PromotionService],
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  display1: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  msgs: Message[] = [];
  add: boolean = false;
  items3: MenuItem[];
  items4: MenuItem[];
  cols: any[];

  type: string;
  sort: string = "id";
  search: string;
  devise: string = "FCFA";
  tva: number = 0.1925;
  lengthPan: number;
  saveIndex: number;
  val: number = 1;

  cart = new Cart('', 0, null, null, 0);
  panprods: PanProd[] = [];
  prixTaxe: number;

  product: Product;
  products: Product[] = [];
  promos: Promotion[] = [];

  constructor(
    private utilService: UtilService,
    private productService: ProductService,
    private promoService: PromotionService,
    private userService: UserService,
    private router : Router,
    private route: ActivatedRoute) {
      this.items3 = [];
      productService.products().subscribe(data => this.products = data.body.content);
      promoService.promoState(1).subscribe(data => this.promos = data.body.content);
      this.lengthPan = utilService.count();
  }

  ngOnInit() {
    this.utilService.setComponent("home");

    this.type = this.route.snapshot.params['type'];
    this.sort = this.route.snapshot.params['sort'];
    this.search = this.route.snapshot.params['nameprod'];

    if(this.panprods.length == 0){
      this.panprods = [];
      this.panprods = this.utilService.getPanProd();
    }

    if(this.cart.indexPan == ''){
      this.cart = new Cart('', 0, null, null, 0);
      this.cart = this.utilService.getCart();
    }

    if(this.sort==="priceasc"){
      this.productService.priceAsc().subscribe(data => this.products = data.body.content);
    }
    else if(this.sort==="pricedesc"){
      this.productService.priceDesc().subscribe(data => this.products = data.body.content);
    }
    else if(this.sort==="nameasc"){
      this.productService.nameAsc().subscribe(data => this.products = data.body.content);
    }
    else if(this.sort==="namedesc"){
      this.productService.nameDesc().subscribe(data => this.products = data.body.content);
    }
    else{
      this.productService.products().subscribe(data => this.products = data.body.content);
    }

    if(this.search!=="" || this.sort!=="undefined"){
      this.productService.searchProduct(this.search).subscribe(data => this.products = data.body.content);
    }

    this.items3 = [
        {label: 'sort ascending price', icon: 'fa fa-sort-asc', command: () => {
            this.priceasc();
        }},
        {label: 'sort descending price', icon: 'fa fa-sort-desc', command: () => {
            this.pricedesc();
        }},
        {label: 'Name - A to Z', icon: 'fa fa-sort-alpha-asc', command: () => {
            this.nameasc();
        }},
        {label: 'Name - Z to A', icon: 'fa fa-sort-alpha-desc', command: () => {
            this.namedesc();
        }}
    ];

    this.items4 = [
        {label: 'American dollar', icon: 'fa fa-dollar', command: () => {
            this.changeToDollar();
        }},
        {label: 'Cameroon FCFA', icon: 'fa fa-money', command: () => {
            this.changeToDefault();
        }},
        {label: 'European euro', icon: 'fa fa-euro', command: () => {
            this.changeToEuro();
        }},
    ];

    this.cols = [
        { field: 'produit', header: 'Produit' },
        { field: 'prix', header: 'Prix unitaire' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'prix total', header: 'Prix total' }
    ];

  }

  showDialog(id: number) {
    this.productService.product(id).subscribe(data => this.product = data.body);
    this.display1 = true;
  }

  showDialogAdd(id: number, index: number) {
    this.productService.product(id).subscribe(data => this.product = data.body);
    this.saveIndex = index;
    this.val = 1;
    this.add = true;
    this.display1 = true;
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'product successfully added to card'});
  }

  AddToCard(id: number){
    let index = this.utilService.isExist(id);
    if(index == -1){
      this.utilService.addProd(id, this.val);
      this.lengthPan = this.utilService.count();
      this.productService.product(id).subscribe(data => this.product = data.body);
      this.hydrateCart();
    }
    else{
      this.productService.product(id).subscribe(data => this.product = data.body);
      this.utilService.alreadyAdd(index, this.val);
      this.panprods[index].nbreExempl += this.val;
      this.utilService.setSubTotal(this.product.prixUnit * this.val);
      this.panprods[index].prixTotal = this.product.prixUnit * this.val;
      this.utilService.updatePanProd(index, this.panprods[index]);
      this.cart.soldeTotal = this.utilService.getSubTotal();
      this.prixTaxe = this.roundDecimal(this.utilService.getSubTotal() * this.tva, 2);
    }
    this.display1 = false;
    this.add = false;
    this.showSuccess();
  }

  CancelAdd(){
    this.display1 = false;
    this.add = false;
  }

  CancelToCart(panprod: PanProd){
    let id = this.utilService.getIdprod(this.panprods.indexOf(panprod));
    this.productService.product(panprod.produit.id).subscribe(data => this.product = data.body);
    let nberProd = this.utilService.getNberProd(this.panprods.indexOf(panprod));
    this.utilService.rmvProd(this.panprods.indexOf(panprod));
    this.utilService.rmvPanProd(this.panprods.indexOf(panprod));
    this.panprods.splice(this.panprods.indexOf(panprod), 1);
    this.utilService.setSubTotal(panprod.produit.prixUnit * nberProd * (-1));
    this.cart.soldeTotal = this.utilService.getSubTotal();
    this.prixTaxe = this.roundDecimal(this.utilService.getSubTotal() * this.tva, 2);
    this.lengthPan = this.utilService.count();
  }

  showCart() {this.display2 = true;}

  hydrateCart(){
    let pp = new PanProd(null, null, 0, 0);
    let lastIndex: number = this.utilService.getLastIndex();
    let nberProd: number = this.utilService.getNberProd(lastIndex);
    if(this.utilService.count() == 1){
      this.cart.indexPan = this.makeId();
      this.cart.dateJour = this.makeDate();
    }
    this.utilService.setSubTotal(this.product.prixUnit * nberProd);
    pp.produit = this.product;
    pp.nbreExempl = nberProd;
    pp.prixTotal = this.product.prixUnit * nberProd;
    this.cart.soldeTotal = this.utilService.getSubTotal();
    pp.panier = this.cart;
    this.utilService.addPanProd(pp);
    this.panprods = this.utilService.getPanProd();
    this.prixTaxe = this.roundDecimal(this.utilService.getSubTotal() * this.tva, 2);
    this.utilService.setPrixTotal(this.prixTaxe + this.cart.soldeTotal);
  }

  CancelBuy(){this.display2 = false;}

  BuyNow(){
    this.utilService.setCart(this.cart);
    this.router.navigateByUrl('/share');
    this.display2 = false;
  }

  changeToDollar(){this.devise = "dollar"}

  changeToEuro(){this.devise = "euro";}

  changeToDefault(){this.devise = "FCFA";}

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

  priceasc(){this.router.navigateByUrl('/home/priceasc/priceasc');}

  pricedesc(){this.router.navigateByUrl('/home/pricedesc/pricedesc');}

  nameasc(){this.router.navigateByUrl('/home/nameasc/nameasc');}

  namedesc(){this.router.navigateByUrl('/home/namedesc/namedesc');}

  showPromotion(){this.display3 = true;}

  cancelPromotion(){this.display3 = false;}

  makeId() {
    let id: string = "";
    let possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 20; i++){
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }

  roundDecimal(nombre, precision){
    let tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
  }

  makeDate(){
    let date = new Date();
    return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()
  }

  searchProd(){
    this.router.navigateByUrl('/home/search/'+this.search);
  }

}
