import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [UtilService],
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
  val: number = 1;
  add: boolean = false;
  items3: MenuItem[];
  items4: MenuItem[];

  //For test
  goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];

  constructor(private utilService: UtilService, private router : Router) {
      this.items3 = [];
  }

  ngOnInit() {
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
            this.priceasc();
        }},
        {label: 'Cameroon FCFA', icon: 'fa fa-money', command: () => {
            this.pricedesc();
        }},
        {label: 'European euro', icon: 'fa fa-euro', command: () => {
            this.nameasc();
        }},
    ];
  }

  showDialog() {
      this.display1 = true;
  }

  showDialogAdd() {
      this.add = true;
      this.display1 = true;
  }

  showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'product successfully added to card'});
  }

  AddToCard(){
    this.display1 = false;
    this.add = false;
    this.showSuccess();
  }

  CancelAdd(){
    this.display1 = false;
    this.add = false;
  }

  showCart() {
    this.display2 = true;
  }

  CancelBuy(){
    this.display2 = false;
  }

  BuyNow(){
    this.router.navigateByUrl('/share');
    this.display2 = false;
  }

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

  priceasc(){}
  pricedesc(){}
  nameasc(){}
  namedesc(){}
  showPromotion(){
    this.display3 = true;
  }
  cancelPromotion(){
    this.display3 = false;
  }

}
