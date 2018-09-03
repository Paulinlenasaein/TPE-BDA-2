import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PanelModule} from 'primeng/panel';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {GrowlModule} from 'primeng/growl';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {SpinnerModule} from 'primeng/spinner';
import {PaginatorModule} from 'primeng/paginator';
import {PasswordModule} from 'primeng/password';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';

import { UtilService } from './services/util.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { PromotionService } from './services/promotion.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShareComponent } from './share/share.component';
import { BuyComponent } from './buy/buy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShareComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule,
    CardModule,
    SplitButtonModule,
    PanelMenuModule,
    PanelModule,
    ButtonModule,
    DialogModule,
    GrowlModule,
    FormsModule,
    InputTextModule,
    SpinnerModule,
    PaginatorModule,
    PasswordModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    TableModule,
    InputMaskModule,
    RadioButtonModule,
    DropdownModule
  ],
  providers: [
    ProductService,
    CartService,
    UtilService,
    PromotionService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
