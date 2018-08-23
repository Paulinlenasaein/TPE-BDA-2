import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PanProd } from '../models/pan-prod';

@Injectable()
export class UtilService {

  static prodId: number[] = [];
  static nberProd: number[] = [];
  static lastIndex: number;
  static subTotal: number = 0;
  static panprods: PanProd[] = [];

  constructor() { }

  addProd(id: number, nber: number){
    UtilService.prodId.push(id);
    UtilService.nberProd.push(nber);
    if(UtilService.prodId.length > 0){
      UtilService.lastIndex = this.count() - 1;
    }
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
    UtilService.subTotal += total;
  }

  count(){
    return UtilService.prodId.length;
  }

  addPanProd(pp: PanProd){
    UtilService.panprods.push(pp);
  }

  rmvPanProd(index: number){
    UtilService.panprods.splice(index, 1);
  }

  getPanProd(){
    return UtilService.panprods;
  }

}
