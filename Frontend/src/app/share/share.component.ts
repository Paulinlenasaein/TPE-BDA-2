import { Component, OnInit } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  display4 : boolean = false;
  blockSpecial: RegExp = /^[^<>*!]+$/;
  phoneNumber: RegExp = /^[0-9]{9}$/;
  mail: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  constructor() { }

  ngOnInit() {
  }

  showInforms(){
    this.display4 = true;
  }

  saveInform(){
    this.display4 = false;
  }

}
