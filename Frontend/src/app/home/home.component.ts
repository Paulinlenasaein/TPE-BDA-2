import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/api';
import {SpinnerModule} from 'primeng/spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  display: boolean = false;
  msgs: Message[] = [];
  val: number = 1;
  add: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
      this.display = true;
  }

  showDialogAdd() {
      this.add = true;
      this.display = true;
  }

  showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'product successfully added to card'});
  }

  AddToCard(){
    this.display = false;
    this.add = false;
    this.showSuccess();
  }

  CancelAdd(){
    this.display = false;
    this.add = false;
  }

}
