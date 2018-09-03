import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PanProd } from '../models/pan-prod';
import { Cart } from '../models/cart';

import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class UtilService {

  static prodId: number[] = [];
  static nberProd: number[] = [];
  static lastIndex: number = 0;
  static subTotal: number = 0;
  static pps: PanProd[] = [];
  static cart = new Cart('', 0, null, null, 0);
  static prixTotal: number;
  static component: string;
  saltRounds = 10;

  constructor() { }

  addProd(id: number, nber: number){
      UtilService.prodId.push(id);
      UtilService.nberProd.push(nber);
      if(UtilService.prodId.length > 0){
        UtilService.lastIndex = this.count() - 1;
      }
  }

  alreadyAdd(index: number, nberProd: number){
    UtilService.nberProd[index] += nberProd;
  }

  isExist(id: number){
    return UtilService.prodId.indexOf(id);
  }

  rmvProd(index: number){
    UtilService.prodId.splice(index, 1);
    UtilService.nberProd.splice(index, 1);
  }

  getIdprod(index:number){
    return UtilService.prodId[index];
  }

  getNberProd(id:number){
    return UtilService.nberProd[id];
  }

  getLastIndex(){
    return UtilService.lastIndex;
  }

  getSubTotal(){
    return UtilService.subTotal;
  }

  setSubTotal(total: number){
    if(UtilService.prodId.length == 0){
      UtilService.subTotal = 0;
    }
    UtilService.subTotal += total;
  }

  setCart(cart: Cart){
    UtilService.cart = cart;
  }

  getCart(){
    return UtilService.cart;
  }

  setPrixTotal(total: number){
    UtilService.prixTotal = total;
  }

  getPrixTotal(){
    return UtilService.prixTotal;
  }

  count(){
    return UtilService.prodId.length;
  }

  addPanProd(pp: PanProd){
    UtilService.pps.push(pp);
  }

  updatePanProd(index: number, pp: PanProd){
    UtilService.pps[index] = pp;
  }

  rmvPanProd(index: number){
    UtilService.pps.splice(index, 1);
  }

  getPanProd(){
    return UtilService.pps;
  }

  crypt(passwordPlain: string){
    return Md5.hashStr(passwordPlain).toString();
  }

  compareHash(bdhash: string, passwordPlain){
    if(bdhash == this.crypt(passwordPlain)){
      return true;
    }
    else{
      return false;
    }
  }

  getComponent(){
    return UtilService.component;
  }

  setComponent(component: string){
    UtilService.component = component;
  }

  roundDecimal(nombre, precision){
    let tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
  }

}
