webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_share_component__ = __webpack_require__("./src/app/share/share.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buy_buy_component__ = __webpack_require__("./src/app/buy/buy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/:type', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/priceasc/:sort', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/pricedesc/:sort', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/nameasc/:sort', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/namedesc/:sort', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/search/:nameprod', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'share', component: __WEBPACK_IMPORTED_MODULE_3__share_share_component__["a" /* ShareComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_3__share_share_component__["a" /* ShareComponent */] },
    { path: 'buy', component: __WEBPACK_IMPORTED_MODULE_4__buy_buy_component__["a" /* BuyComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" data-target=\".navbar-collapse\" data-toggle=\"collapse\" class=\"navbar-toggle collapsed\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Menu</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"/en_US/\" class=\"navbar-brand logo\">\n            <span alt=\"Logo of TW Micronics\" title=\"TW Micronics\"><img class=\"img img-responsive\" src=\"../assets/home/images/logo.png\"/></span>\n        </a>\n        <div class=\"position-responsive\"><a class=\"disabled linkApp\" > TW MICRONICS SECURE ONLINE SHARE </a></div>\n      </div>\n      <div class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"home\"><span class=\"fa fa-shopping-bag\"></span>  Shop </a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"cart\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>  Mon panier</a></li>\n          <li routerLinkActive=\"active\" class=\"navbar-right\"><a routerLink=\"account\"><span class=\"glyphicon glyphicon-user\"></span> Mon compte</a></li>\n        </ul>\n        <div class=\"navbar-nav navbar-right langue\">\n          <a routerLink=\"account\" class=\"signin\"><span class=\"fa fa-user-circle fa\"></span> Login</a>\n          <p-splitButton label=\"Choisir la langue\" icon=\"fa fa-adjust\" (onClick)=\"save()\" [model]=\"items1\"></p-splitButton>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid\">\n    <div class=\"jumbotron\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n          <hr>\n          <div class=\"panel panel-primary alprod\">\n            <div class=\"panel-body\">\n              <span class=\"glyphicon glyphicon-circle-arrow-down\" style=\"float:left;\"></span>\n              <span class=\"form-item\">All products</span>\n            </div>\n          </div>\n          <hr>\n          <p-panelMenu [model]=\"items2\" [multiple] = false class=\"panel-menu\"></p-panelMenu>\n        </div>\n        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<section id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row text-center text-xs-center text-sm-left text-md-left\">\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <h3>Services</h3>\n        <ul class=\"list-unstyled quick-links\">\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n        </ul>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <h3>Join us</h3>\n        <ul class=\"list-unstyled quick-links\">\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n        </ul>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <h3>TW Micronics</h3>\n        <ul class=\"list-unstyled quick-links\">\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n          <li><a href=\"#\" title=\"Design and developed by\"><i class=\"fa fa-angle-double-right\"></i>Imprint</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\n        <ul class=\"list-unstyled list-inline social text-center\">\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-instagram\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-google-plus\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\n        </ul>\n      </div>\n      <hr>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\n        <p class=\"copyright\"> All right Reversed. Copyright © <a class=\"text-green ml-2\" href=\"https://web.facebook.com/fotsing.annick\" target=\"_blank\">FOTSING TEDJON ANNICK PAULIN</a></p>\n      </div>\n      <hr>\n    </div>\n  </div>\n</section>\n<!-- ./Footer -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn-lg-style-filter {\n  width: auto;\n  height: 50px; }\n\n.inline-form input {\n  display: inline-block;\n  width: 100px; }\n\n.linkApp {\n  cursor: pointer;\n  text-decoration: none; }\n\n.navbar-brand, .navbar-nav li a {\n  line-height: 80px;\n  height: 80px;\n  padding-top: 0; }\n\n.img {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 80px;\n  height: auto; }\n\n.alprod {\n  background-color: #1E90FF;\n  color: #fff;\n  text-align: center;\n  font-size: 18px;\n  cursor: pointer; }\n\nul li {\n  font-size: 18px; }\n\n.position-responsive {\n  padding-top: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center; }\n\n.langue {\n  padding-top: 20px;\n  padding-right: 20px;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center; }\n\n.signin {\n  padding-right: 15px;\n  float: left;\n  text-decoration: none;\n  font-weight: bold;\n  color: #fff; }\n\nul li {\n  font-weight: bold; }\n\n.panel-menu {\n  color: #e35505;\n  font-weight: bold; }\n\n/* Footer */\n\nsection {\n  padding: 60px 0; }\n\nsection .section-title {\n  text-align: center;\n  color: #007b5e;\n  margin-bottom: 50px;\n  text-transform: uppercase; }\n\n#footer {\n  background: #007b5e !important; }\n\n#footer h5, h3 {\n  padding-left: 10px;\n  border-left: 3px solid #eeeeee;\n  padding-bottom: 6px;\n  margin-bottom: 20px;\n  color: #ffffff; }\n\n#footer a {\n  color: #ffffff;\n  text-decoration: none !important;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\n#footer ul.social li {\n  padding: 3px 0; }\n\n#footer ul.social li a i {\n  margin-right: 5px;\n  font-size: 25px;\n  -webkit-transition: .5s all ease;\n  transition: .5s all ease; }\n\n#footer ul.social li:hover a i {\n  font-size: 30px;\n  margin-top: -10px; }\n\n#footer ul.social li a,\n#footer ul.quick-links li a {\n  color: #ffffff; }\n\n#footer ul.social li a:hover {\n  color: #eeeeee; }\n\n#footer ul.quick-links li {\n  padding: 3px 0;\n  -webkit-transition: .5s all ease;\n  transition: .5s all ease; }\n\n#footer ul.quick-links li:hover {\n  padding: 3px 0;\n  margin-left: 5px;\n  font-weight: 700; }\n\n#footer ul.quick-links li a i {\n  margin-right: 5px; }\n\n#footer ul.quick-links li:hover a i {\n  font-weight: 700; }\n\n@media (max-width: 767px) {\n  #footer h5 {\n    padding-left: 0;\n    border-left: transparent;\n    padding-bottom: 0px;\n    margin-bottom: 10px; } }\n\n.copyright {\n  font-weight: bolder;\n  font-size: 18px;\n  padding: 10px 10px 10px 10px;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("./src/app/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(utilService) {
        this.utilService = utilService;
        this.title = 'Service online de ventesécurisée de TW Micronics';
        this.display = false;
        this.items1 = [];
        this.items2 = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comp = this.utilService.getComponent();
        this.items1 = [
            { label: 'Anglais', icon: 'fa fa-flag', command: function () {
                    _this.english();
                } },
            { label: 'Français', icon: 'fa fa-flag-checkered', command: function () {
                    _this.french();
                } }
        ];
        this.items2 = [
            {
                label: 'SOFTWARE & CLOUD',
                icon: 'fa fa-fw fa-cloud',
                items: [{
                        label: 'New',
                        icon: 'fa fa-fw fa-plus',
                        items: [
                            { label: 'Project', icon: 'fa fa-fw fa-lock' },
                            { label: 'Other', icon: 'fa fa-fw fa-list' }
                        ]
                    },
                    { label: 'Open', icon: 'fa fa-fw fa-external-link' },
                    { separator: true },
                    { label: 'Quit', icon: 'fa fa-fw fa-close' }
                ], command: function () {
                    console.log("Hello");
                }
            },
            {
                label: 'TRAINING AND CERTIFICATIONS',
                icon: 'fa fa-fw fa-certificate',
                items: [
                    { label: 'Undo', icon: 'fa fa-fw fa-mail-forward' },
                    { label: 'Redo', icon: 'fa fa-fw fa-mail-reply' }
                ]
            },
            {
                label: 'DIGITAL MARKETING',
                icon: 'fa fa-fw fa-bookmark',
                items: [
                    {
                        label: 'Contents',
                        icon: 'fa fa-fw fa-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'fa fa-fw fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File',
                                icon: 'fa fa-fw fa-file',
                            }
                        ]
                    }
                ]
            },
            {
                label: 'INTERNET OF THINGS',
                icon: 'fa fa-fw fa-internet-explorer',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa fa-fw fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa fa-fw fa-save' },
                            { label: 'Update', icon: 'fa fa-fw fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa fa-fw fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa fa-fw fa-minus' }
                        ]
                    }
                ]
            }
        ];
    };
    AppComponent.prototype.english = function () { };
    AppComponent.prototype.french = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]],
            styles: [__webpack_require__("./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_accordion__ = __webpack_require__("./node_modules/primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_card__ = __webpack_require__("./node_modules/primeng/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_splitbutton__ = __webpack_require__("./node_modules/primeng/splitbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_splitbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_splitbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_panelmenu__ = __webpack_require__("./node_modules/primeng/panelmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_panelmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_panelmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_growl__ = __webpack_require__("./node_modules/primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_spinner__ = __webpack_require__("./node_modules/primeng/spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_paginator__ = __webpack_require__("./node_modules/primeng/paginator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_paginator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_paginator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_password__ = __webpack_require__("./node_modules/primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_keyfilter__ = __webpack_require__("./node_modules/primeng/keyfilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_keyfilter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_keyfilter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_messages__ = __webpack_require__("./node_modules/primeng/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_message__ = __webpack_require__("./node_modules/primeng/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_inputmask__ = __webpack_require__("./node_modules/primeng/inputmask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_inputmask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_inputmask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_radiobutton__ = __webpack_require__("./node_modules/primeng/radiobutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_radiobutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_radiobutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_progressspinner__ = __webpack_require__("./node_modules/primeng/progressspinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_progressspinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_progressspinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_util_service__ = __webpack_require__("./src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_promotion_service__ = __webpack_require__("./src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_paypal_service__ = __webpack_require__("./src/app/services/paypal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_om_service__ = __webpack_require__("./src/app/services/om.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_momo_service__ = __webpack_require__("./src/app/services/momo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__share_share_component__ = __webpack_require__("./src/app/share/share.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__buy_buy_component__ = __webpack_require__("./src/app/buy/buy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_34__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_35__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_36__share_share_component__["a" /* ShareComponent */],
                __WEBPACK_IMPORTED_MODULE_37__buy_buy_component__["a" /* BuyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_card__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_splitbutton__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_panelmenu__["PanelMenuModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_growl__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_spinner__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_paginator__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_keyfilter__["KeyFilterModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_messages__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_message__["MessageModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_inputmask__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_radiobutton__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_24_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_25_primeng_progressspinner__["ProgressSpinnerModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_28__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_26__services_util_service__["a" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_29__services_promotion_service__["a" /* PromotionService */],
                __WEBPACK_IMPORTED_MODULE_30__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_31__services_paypal_service__["a" /* PaypalService */],
                __WEBPACK_IMPORTED_MODULE_32__services_om_service__["a" /* OmService */],
                __WEBPACK_IMPORTED_MODULE_33__services_momo_service__["a" /* MomoService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_34__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buy/buy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-12 main-login main-center\">\n      <h2 class=\"title\" *ngIf=\"paymode==='notchoose'\">Choose the payment mode</h2>\n      <hr *ngIf=\"paymode==='notchoose'\">\n      <ul class=\"list-group\" *ngIf=\"paymode==='notchoose'\">\n        <li class=\"list-group-item\">\n          <div class=\"row payments-anim\">\n            <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10 img-fluid\">\n              <img src=\"../assets/buy/images/pp.png\" alt=\"PayPal\">\n              <span class=\"paylist pp\">PayPal</span>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 btn-pos\">\n              <button type=\"button\" class=\"btn btn-primary btn-block form-item\" (click)=\"paypal()\"><i class=\"fa fa-paypal\" aria-hidden=\"true\"></i>   Continue</button>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row payments-anim\">\n            <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10 img-fluid\">\n              <img src=\"../assets/buy/images/om.jpeg\" alt=\"Orange Money\">\n              <span class=\"paylist om\">Orange Money</span>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 btn-pos\">\n              <button type=\"button\" class=\"btn btn-warning btn-block btn-color-om form-item\" (click)=\"om()\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>   Continue</button>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row payments-anim\">\n            <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10 img-fluid\">\n              <img src=\"../assets/buy/images/momo.jpeg\" alt=\"Mobile Money\">\n              <span class=\"paylist momo\">MTN Mobile Money</span>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 btn-pos\">\n              <button type=\"button\" class=\"btn btn-info btn-block form-item\" (click)=\"momo()\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>  Continue</button>\n            </div>\n          </div>\n        </li>\n      </ul>\n      <div class=\"row\" *ngIf=\"paymode==='PayPal'\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-2 col-md-2 col-sm-2\"></div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 img-fluid\">\n              <img src=\"../assets/buy/images/pp.png\" alt=\"Mobile Money\">\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2\"></div>\n          </div><hr>\n          <span>\n            Un email de confirmation de votre règlement vous sera envoyé sur l'adresse email de contact que vous nous avez fourni:\n            <i class=\"form-item\">{{cart.client.email}}</i>\n          </span><hr>\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\" style=\"color:#fff;text-align:center;font-size:14px;\">Solde de votre panier à débiter</h3>\n            </div>\n            <div class=\"panel-body\">\n              <ul class=\"list-group\">\n               <li class=\"list-group-item form-item-1\">Price in FCFA <span class=\"badge badge-primary\">{{totalsum}}   <i>FCFA</i></span></li>\n               <li class=\"list-group-item form-item-1\">Price in dollar <span class=\"badge\">{{totalsumd}}   <i class=\"fa fa-dollar\"></i></span></li>\n               <li class=\"list-group-item form-item-1\">Price in euro <span class=\"badge\">{{totalsume}}   <i class=\"fa fa-euro\"></i></span></li>\n             </ul>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"></div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n              <form class=\"\" novalidate [formGroup]=\"formpaypal\" (ngSubmit)=\"pay()\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"form-group\">\n                      <label for=\"number\" class=\"cols-sm-2 control-label\">Country</label>\n                      <div class=\"cols-sm-10\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-flag\" aria-hidden=\"true\"></i></span>\n                          <p-dropdown [options]=\"countries\" formControlName=\"country\" placeholder=\"Select your country\" optionLabel=\"country\" [showClear]=\"true\"></p-dropdown>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"form-group\">\n                      <label for=\"number\" class=\"cols-sm-2 control-label\">Card Number</label>\n                      <div class=\"cols-sm-10\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i></span>\n                           <p-inputMask mask=\"9999-9999-9999-9999\" formControlName=\"cardnumber\" placeholder=\"9999-9999-9999-9999\"></p-inputMask>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"form-group\">\n                      <label for=\"number\" class=\"cols-sm-2 control-label\">Payment Mode</label>\n                      <div class=\"cols-sm-12\">\n                        <div class=\"row\">\n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n                              <span class=\"ui-g-12\">\n                                <p-radioButton name=\"aymode\" formControlName=\"paymode\" value=\"American Express\" label=\"American Express\" inputId=\"opt1\"></p-radioButton>\n                                <img src=\"../assets/buy/images/AE.jpeg\" alt=\"Mobile Money\" width=\"60\" height=\"50\">\n                              </span>\n                            </div>\n                          </div>\n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n                              <span class=\"ui-g-12\">\n                                <p-radioButton name=\"aymode\" formControlName=\"paymode\" value=\"Maestro\" label=\"Maestro\" inputId=\"opt2\"></p-radioButton>\n                                <img src=\"../assets/buy/images/Maestro.png\" alt=\"Maestro\" width=\"100\" height=\"50\">\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n                              <span class=\"ui-g-12\">\n                                <p-radioButton name=\"aymode\" formControlName=\"paymode\" value=\"MasterCard\" label=\"MasterCard\" inputId=\"opt3\"></p-radioButton>\n                                <img src=\"../assets/buy/images/MasterCard.png\" alt=\"MasterCard\" width=\"100\" height=\"50\">\n                              </span>\n                            </div>\n                          </div>\n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n                              <span class=\"ui-g-12\">\n                                <p-radioButton name=\"aymode\" formControlName=\"paymode\" value=\"Visa\" label=\"Visa\" inputId=\"opt4\"></p-radioButton>\n                                <img src=\"../assets/buy/images/Visa.png\" alt=\"Visa\" width=\"100\" height=\"50\">\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"form-group\">\n                      <label for=\"number\" class=\"cols-sm-2 control-label\">Expiration Date</label>\n                      <div class=\"cols-sm-10\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                          <p-inputMask mask=\"99-9999\" formControlName=\"exp\" placeholder=\"99-9999\"></p-inputMask>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"form-group\">\n                      <label for=\"number\" class=\"cols-sm-2 control-label\">Visual Cryptography</label>\n                      <div class=\"cols-sm-10\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                          <p-inputMask mask=\"999\" formControlName=\"cvv\" placeholder=\"999\"></p-inputMask>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div><br>\n                <div class=\"row\">\n                  <div class=\"col-sm-6 col-sm-offset-3\">\n                    <button pButton type=\"submit\" [disabled]=\"formpaypal.invalid\" style=\"font-weight:bold;\" label=\"Valider\" icon=\"fa fa-hand-o-right\" tabindex=\"4\" class=\"form-control btn btn-raised btn-primary btn-lg btn-login\"></button>\n                  </div>\n                </div><br>\n              </form>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"paymode==='payment'\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4 img-fluid\" *ngIf=\"state===1\">\n              <img src=\"../assets/buy/images/cool.gif\" alt=\"Transaction réussite\" style=\"padding-left: 15px,\">\n              <p style=\"font-weight:bold;font-size:26px;text-align:center;color:green;\">{{message}}</p>\n            </div>\n            <div class=\"col-sm-4 img-fluid\" *ngIf=\"state===-1\">\n              <img src=\"../assets/buy/images/false.jpeg\" alt=\"Echec de la transaction\">\n              <p style=\"font-weight:bold;font-size:26px;text-align:center;color:green;\">{{message}}</p>\n            </div>\n            <div class=\"col-sm-4\"></div>\n          </div>\n        </div>\n        <div class=\"row\" style=\"padding:\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\" *ngFor=\"let pp of panprods; let index=index\">\n            <a href=\"{{urls[index]}}\"><img src=\"../assets/buy/images/zipfile.jpeg\" alt=\"Produit à télécharger\"></a>\n            <p class=\"form-item\">\n              {{pp.produit.nomProd}}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/buy/buy.component.scss":
/***/ (function(module, exports) {

module.exports = ".paylist {\n  padding: 20px 20px 20px 20px;\n  font-weight: bold;\n  font-size: 18px; }\n\nli:hover {\n  background-color: #F0F8FF; }\n\n.pp {\n  color: #1E90FF; }\n\n.om {\n  color: orange; }\n\n.momo {\n  color: #FFD700; }\n\n.title {\n  font-weight: bold;\n  text-align: center;\n  color: #1E90FF; }\n\n.btn-pos {\n  padding-top: 30px; }\n\n.btn-color-om {\n  background-color: orange; }\n\n.btn-color-momo {\n  background-color: #FFD700; }\n\n.payments-anim {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transition: 0.5s;\n  -webkit-transform-style: preserve-3d;\n  -moz-transition: 0.5s;\n  -moz-transform-style: preserve-3d;\n  -o-transition: 0.5s;\n  -o-transform-style: preserve-3d;\n  -ms-transition: 0.5s;\n  -ms-transform-style: preserve-3d;\n  transition: 0.5s;\n  transform-style: preserve-3d; }\n\n.payments-anim:hover {\n  -webkit-transform: rotateY(15deg);\n  transform: scale(1.03); }\n"

/***/ }),

/***/ "./src/app/buy/buy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__("./src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_paypal_service__ = __webpack_require__("./src/app/services/paypal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_om_service__ = __webpack_require__("./src/app/services/om.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_momo_service__ = __webpack_require__("./src/app/services/momo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_cart__ = __webpack_require__("./src/app/models/cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BuyComponent = /** @class */ (function () {
    function BuyComponent(utilService, paypalService, omService, momoService, sanitizer) {
        this.utilService = utilService;
        this.paypalService = paypalService;
        this.omService = omService;
        this.momoService = momoService;
        this.sanitizer = sanitizer;
        this.paymode = "notchoose";
        this.cart = new __WEBPACK_IMPORTED_MODULE_7__models_cart__["a" /* Cart */]('', 0, null, null, 0);
        this.totalsum = 0;
        this.totalsumd = 0;
        this.totalsume = 0;
        this.countries = [];
        this.message = "";
        this.state = 1;
        this.refTransaction = "";
        this.panprods = [];
        this.urls = [];
        this.panprods = utilService.getPanProd();
        for (var _i = 0, _a = this.panprods; _i < _a.length; _i++) {
            var pp = _a[_i];
            this.urls.push(this.trustyUrl("localhost:8080/src/assets/products/" + pp.produit.nomProd + ".zip"));
        }
    }
    BuyComponent.prototype.ngOnInit = function () {
        this.utilService.setComponent("buy");
        this.cart = this.utilService.getCart();
        this.totalsum = this.utilService.getPrixTotal();
        this.totalsumd = this.utilService.roundDecimal(this.totalsum * 0.0018, 2);
        this.totalsume = this.utilService.roundDecimal(this.totalsum * 0.0015, 2);
        this.formpaypal = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            cardnumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            paymode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            exp: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            cvv: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
        });
        this.countries = [
            { country: "Afghanistan" },
            { country: "Afrique du Sud" },
            { country: "Albanie" },
            { country: "Algérie" },
            { country: "Allemagne" },
            { country: "Andorre" },
            { country: "Angola" },
            { country: "Anguilla" },
            { country: "Antarctique" },
            { country: "Antigua-et-Barbuda" },
            { country: "Antilles néerlandaises" },
            { country: "Arabie saoudite" },
            { country: "Argentine" },
            { country: "Arménie" },
            { country: "Aruba" },
            { country: "Australie" },
            { country: "Autriche" },
            { country: "Azerbaïdjan" },
            { country: "Bahamas" },
            { country: "Bahreïn" },
            { country: "Bangladesh" },
            { country: "Barbade" },
            { country: "Bélarus" },
            { country: "Belgique" },
            { country: "Belize" },
            { country: "Bénin" },
            { country: "Bermudes" },
            { country: "Bhoutan" },
            { country: "Bolivie" },
            { country: "Bosnie-Herzégovine" },
            { country: "Botswana" },
            { country: "Brésil" },
            { country: "Brunéi Darussalam" },
            { country: "Bulgarie" },
            { country: "Burkina Faso" },
            { country: "Burundi" },
            { country: "Cambodge" },
            { country: "Cameroun" },
            { country: "Canada" },
            { country: "Cap-Vert" },
            { country: "Ceuta et Melilla" },
            { country: "Chili" },
            { country: "Chine" },
            { country: "Chypre" },
            { country: "Colombie" },
            { country: "Comores" },
            { country: "Congo-Brazzaville" },
            { country: "Corée du Nord" },
            { country: "Corée du Sud" },
            { country: "Costa Rica" },
            { country: "Côte d’Ivoire" },
            { country: "Croatie" },
            { country: "Cuba" }
        ];
    };
    BuyComponent.prototype.paypal = function () {
        this.paymode = "PayPal";
    };
    BuyComponent.prototype.om = function () {
        this.paymode = "Orange Money";
    };
    BuyComponent.prototype.momo = function () {
        this.paymode = "Mobile Money";
    };
    BuyComponent.prototype.pay = function () {
        this.refTransaction = this.paypalService.transaction(this.cart.client, this.totalsum, this.paymode);
        if (this.refTransaction !== "false") {
            this.message = "Transaction éffectuée avec succès, un mail vous a été envoyé. Réderence de la transaction: " + this.refTransaction;
            this.state = 1;
        }
        else {
            this.message = "Echec de la transaction, le solde de votre carte est insuffisant!";
            this.state = -1;
        }
        this.paymode = "payment";
    };
    BuyComponent.prototype.trustyUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    BuyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buy',
            template: __webpack_require__("./src/app/buy/buy.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_4__services_paypal_service__["a" /* PaypalService */], __WEBPACK_IMPORTED_MODULE_5__services_om_service__["a" /* OmService */], __WEBPACK_IMPORTED_MODULE_6__services_momo_service__["a" /* MomoService */]],
            styles: [__webpack_require__("./src/app/buy/buy.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__services_paypal_service__["a" /* PaypalService */],
            __WEBPACK_IMPORTED_MODULE_5__services_om_service__["a" /* OmService */],
            __WEBPACK_IMPORTED_MODULE_6__services_momo_service__["a" /* MomoService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-growl ui-growl-message\">\n  <p-growl [(value)]=\"msgs\" [style] = \"{'padding-top':'70px'}\"></p-growl>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n      <div class=\"ui-inputgroup\">\n        <input type=\"text\" pInputText placeholder=\"Product of TW Micronics\" class=\"btn-block\" [(ngModel)]=\"search\">\n        <button pButton type=\"button\" label=\"Search\" (click)=\"searchProd()\" class=\"btn ui-button-primary detail-promo\"><span class=\"glyphicon glyphicon-search\"></span></button>\n      </div>\n  </div>\n  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 btn-lg-style-filter\">\n    <div class=\"ui-splitbutton-button\">\n      <p-splitButton label=\"Sort By\" class=\"detail-promo\" icon=\"fa fa-filter\" (onClick)=\"save()\" [model]=\"items3\"></p-splitButton>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n    <div class=\"btn-block ui-splitbutton-button\">\n      <p-splitButton label=\"Pricelist of TW Micronics\" class=\"detail-promo\" icon=\"fa fa-balance-scale\" (onClick)=\"save()\" [model]=\"items4\"></p-splitButton>\n    </div>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n    <div class=\"ui-inputgroup\">\n      <div class=\"promotion btn-block\" *ngIf=\"promos!==undefined\">\n        <span>Profitez des promotions en cours...</span>\n      </div>\n      <div class=\"promotion btn-block\" *ngIf=\"promos===undefined\">\n        <span>Aucune promotion en cours...</span>\n      </div>\n      <button pButton type=\"button\" label=\"see detail\" icon=\"fa fa-dot-circle-o\" (click)=\"showPromotion()\" class=\"detail-promo\"></button>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n    <p-paginator [rows]=\"10\" [totalRecords]=\"120\" [rowsPerPageOptions]=\"[10,20,30]\" pageLinkSize=\"7\" (onPageChange)=\"paginate($event)\"></p-paginator>\n  </div>\n  <div  class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\">\n    <div class=\"panier-block\">\n      <div class=\"nbreprod\">{{lengthPan}}</div>\n      <button type=\"button\" (click)=\"showCart()\" class=\"btn-lg-style button-pan\"><img src=\"../assets/home/images/panier.png\" alt=\"Mon panier\" class=\"img-panier\"/></button>\n    </div>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div *ngFor=\"let product of products;let index=index\">\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 cart-anim\">\n      <p-card styleClass=\"ui-card-shadow\" [@goals]=\"products.length\">\n          <p-header>\n              <img alt=\"Product image\" src=\"../assets/home/images/products/{{product.image}}\">\n          </p-header>\n          <div class=\"ui-card-content\">\n            <div id=\"card-content\" class=\"card-title\">\n              {{product.nomProd}}\n            </div>\n            <div class=\"card-price\" *ngIf=\"devise==='FCFA'\">\n              {{product.prixUnit}} {{devise}}\n            </div>\n            <div class=\"card-price\" *ngIf=\"devise==='dollar'\">\n              <i class=\"fa fa-dollar\"></i> {{roundDecimal(product.prixUnit * 0.0018, 2)}}\n            </div>\n            <div class=\"card-price\" *ngIf=\"devise==='euro'\">\n              {{roundDecimal(product.prixUnit * 0.0015, 2)}} <i class=\"fa fa-euro\"></i>\n            </div>\n          </div>\n          <p-footer>\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"ui-inputgroup\">\n                  <button pButton type=\"button\" (click)=\"showDialogAdd(product.id, index)\" icon=\"fa fa-cart-plus\" label=\"Add to cart\"  class=\"ui-button-success card-responsive\"></button>\n                  <button type=\"button\" (click)=\"showDialog(product.id)\" pButton icon=\"fa fa-info-circle\" label=\"Detail prod\" class=\"ui-button-secondary card-responsive\"></button>\n                </div>\n              </div>\n            </div>\n          </p-footer>\n      </p-card>\n    </div>\n  </div>\n</div>\n\n<p-dialog header=\"Detail sur le produit\" [(visible)]=\"display1\" [modal]=\"true\" [responsive]=\"true\" [width]=\"450\" [minWidth]=\"200\" [minY]=\"70\"\n      [maximizable]=\"false\" [baseZIndex]=\"10000\" (onHide)=\"CancelAdd()\" class=\"ui-dialog-titlebar\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-11\">\n      <div class=\"ui-dialog-content\">\n        <ul class=\"list-group\" *ngIf=\"product!==undefined\">\n          <li class=\"list-group-item\">Nom du produit: <i class=\"form-item\">{{product.nomProd}}</i></li>\n          <li class=\"list-group-item\">Prix unitaire: <i class=\"form-item\">{{product.prixUnit}} FCFA</i></li>\n          <li class=\"list-group-item\">Type du produit: <i class=\"form-item\">{{product.type.type}}</i></li>\n          <li class=\"list-group-item\">Taille: <i class=\"form-item\">{{product.size / 1000000}} Mo</i></li>\n          <li class=\"list-group-item\">Description: <i class=\"form-item\">{{product.description}}</i></li>\n        </ul>\n        <i class=\"form-item\" *ngIf=\"add === true\">Choisir nombre d'exemplaires: </i><p-spinner *ngIf=\"add === true\" size=\"1\" [(ngModel)]=\"val\" [min]=\"1\"></p-spinner>\n      </div>\n    </div>\n  </div>\n  <p-footer class=\"ui-dialog-footer\">\n      <button *ngIf=\"add === false\" type=\"button\" pButton icon=\"fa fa-check\" (click)=\"display1=false\" label=\"Ok\"></button>\n      <button *ngIf=\"add === true\" type=\"button\" icon=\"fa fa-cart-plus\" pButton (click)=\"AddToCard(product.id)\" label=\"confirm the addition\"></button>\n      <button *ngIf=\"add === true\" type=\"button\" pButton icon=\"fa fa-close\" (click)=\"CancelAdd()\" label=\"Cancel\"></button>\n  </p-footer>\n</p-dialog>\n\n<p-dialog header=\"Mon panier\" [(visible)]=\"display2\" [modal]=\"true\" [responsive]=\"true\" [minWidth]=\"400\"\n[maximizable]=\"false\" [baseZIndex]=\"10000\" (onHide)=\"CancelBuy()\" class=\"ui-dialog-titlebar\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-11\">\n      <div class=\"ui-dialog-content\" *ngIf=\"lengthPan!==0\">\n        <p-table [columns]=\"cols\" [value]=\"panprods\" selectionMode=\"single\" [responsive]=\"true\">\n          <ng-template pTemplate=\"caption\">\n              Detail of my cart\n          </ng-template>\n          <ng-template pTemplate=\"header\">\n              <tr>\n                <th>Produit</th>\n                <th>Prix unitaire (FCFA)</th>\n                <th>Nombre exemplaire</th>\n                <th>Prix total (FCFA)</th>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-panprod>\n            <tr>\n                <td>\n                    {{panprod.produit.nomProd}}\n                </td>\n                <td>\n                    {{panprod.produit.prixUnit}}\n                </td>\n                <td>\n                    {{panprod.nbreExempl}}\n                </td>\n                <td>\n                    {{panprod.prixTotal}}\n                </td>\n                <td>\n                    <button type=\"button\" pButton icon=\"fa fa-close\" class=\"btn btn-danger\" (click)=\"CancelToCart(panprod)\" label=\"Delete\"></button>\n                </td>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"footer\">\n              <tr>\n                <td colspan=\"3\">Prix hors Taxe</td>\n                <td>{{cart.soldeTotal}}</td>\n              </tr>\n              <tr>\n                <td colspan=\"3\">Taxe</td>\n                <td>{{prixTaxe}}</td>\n              </tr>\n              <tr>\n                <td colspan=\"3\">Somme totale</td>\n                <td>{{prixTaxe + cart.soldeTotal}}</td>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"summary\">\n              There are {{panprods?.length}} product(s)\n          </ng-template>\n        </p-table>\n      </div>\n      <div class=\"ui-dialog-content\" *ngIf=\"lengthPan===0\">\n        <i class=\"form-item\">Votre panier est vide pour l'instant...</i>\n      </div>\n    </div>\n  </div>\n  <p-footer class=\"ui-dialog-footer\">\n      <button type=\"button\" pButton icon=\"fa fa-mail-reply\" (click)=\"display2=false\" label=\"Continue Shopping\"></button>\n      <button type=\"button\" icon=\"fa fa-bolt\" pButton (click)=\"BuyNow()\" label=\"Go to Checkout\" [disabled]=\"lengthPan===0\"></button>\n  </p-footer>\n</p-dialog>\n\n<p-dialog header=\"Details sur les promotions\" [(visible)]=\"display3\" [modal]=\"true\" [responsive]=\"true\" [minWidth]=\"400\" [minY]=\"70\"\n      [maximizable]=\"true\" [baseZIndex]=\"10000\" class=\"ui-dialog-titlebar\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-11\">\n      <div class=\"ui-dialog-content\" *ngIf=\"promos!==undefined\">\n        <div *ngFor=\"let promo of promos\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\"><i class=\"form-item\">{{promo.descriptPromo}}</i></li>\n            <li class=\"list-group-item\">Produit: <i class=\"form-item\">{{promo.produit.nomProd}}</i></li>\n            <li class=\"list-group-item\">Prix promo: <i class=\"form-item\">{{promo.prixPromo}} FCFA</i></li>\n            <li class=\"list-group-item\">Durée: <i class=\"form-item\">{{promo.dureePromo}} jours de folie</i></li>\n            <li class=\"list-group-item\">Date de début: <i class=\"form-item\">{{promo.dateDebut}}</i></li>\n            <li class=\"list-group-item\">Date de fin: <i class=\"form-item\">{{promo.dateFin}}</i></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p-footer class=\"ui-dialog-footer\">\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"display3=false\" label=\"Ok\"></button>\n  </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-responsive {\n  font-size: 12px;\n  font-weight: bold; }\n\n.card-title {\n  font-size: 13px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  padding-bottom: 5px;\n  color: #E35505; }\n\n.card-price {\n  font-weight: bold;\n  font-size: 12px;\n  color: #000; }\n\n#card-content {\n  width: 200px;\n  height: 50px;\n  background-color: #fff;\n  overflow: auto; }\n\n.ui-growl {\n  z-index: 2 !important; }\n\n.panier-block {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.nbreprod {\n  width: auto;\n  height: auto;\n  background-color: #FF00FF;\n  padding-left: 6px;\n  padding-right: 6px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  border-radius: 15px;\n  position: absolute;\n  z-index: 1; }\n\n.button-pan {\n  margin-right: -5px;\n  z-index: 0; }\n\n.img-panier {\n  width: 60px;\n  height: 60px;\n  border-radius: 25px;\n  margin-top: -5px;\n  margin-left: -12px;\n  z-index: 0; }\n\n.life-container {\n  background: #3FA0E1;\n  padding: .5em;\n  font-weight: bold;\n  font-size: 12px;\n  cursor: pointer; }\n\n.promotion {\n  height: 50px;\n  max-width: 90%;\n  background-color: #FFF8DC;\n  text-align: center;\n  padding: .5em;\n  font-weight: bolder; }\n\n.detail-promo {\n  font-weight: bolder;\n  background: #00BFFF;\n  color: #fff; }\n\n.detail-promo:hover {\n  background-color: #1E90FF; }\n\n.cart-anim {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transition: 0.5s;\n  -webkit-transform-style: preserve-3d;\n  -moz-transition: 0.5s;\n  -moz-transform-style: preserve-3d;\n  -o-transition: 0.5s;\n  -o-transform-style: preserve-3d;\n  -ms-transition: 0.5s;\n  -ms-transform-style: preserve-3d;\n  transition: 0.5s;\n  transform-style: preserve-3d; }\n\n.cart-anim:hover {\n  -webkit-transform: rotateY(15deg);\n  transform: scale(1.05); }\n\n/* For responsive table */\n\n@media only all {\n  th.ui-p-6,\n  td.ui-p-6,\n  th.ui-p-5,\n  td.ui-p-5,\n  th.ui-p-4,\n  td.ui-p-4,\n  th.ui-p-3,\n  td.ui-p-3,\n  th.ui-p-2,\n  td.ui-p-2,\n  th.ui-p-1,\n  td.ui-p-1 {\n    display: none; } }\n\n/* Show priority 1 at 320px (20em x 16px) */\n\n@media screen and (min-width: 20em) {\n  th.ui-p-1,\n  td.ui-p-1 {\n    display: table-cell; } }\n\n/* Show priority 2 at 480px (30em x 16px) */\n\n@media screen and (min-width: 30em) {\n  th.ui-p-2,\n  td.ui-p-2 {\n    display: table-cell; } }\n\n/* Show priority 3 at 640px (40em x 16px) */\n\n@media screen and (min-width: 40em) {\n  th.ui-p-3,\n  td.ui-p-3 {\n    display: table-cell; } }\n\n/* Show priority 4 at 800px (50em x 16px) */\n\n@media screen and (min-width: 50em) {\n  th.ui-p-4,\n  td.ui-p-4 {\n    display: table-cell; } }\n\n/* Show priority 5 at 960px (60em x 16px) */\n\n@media screen and (min-width: 60em) {\n  th.ui-p-5,\n  td.ui-p-5 {\n    display: table-cell; } }\n\n/* Show priority 6 at 1,120px (70em x 16px) */\n\n@media screen and (min-width: 70em) {\n  th.ui-p-6,\n  td.ui-p-6 {\n    display: table-cell; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__("./src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_promotion_service__ = __webpack_require__("./src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_cart__ = __webpack_require__("./src/app/models/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_pan_prod__ = __webpack_require__("./src/app/models/pan-prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(utilService, productService, promoService, userService, router, route) {
        var _this = this;
        this.utilService = utilService;
        this.productService = productService;
        this.promoService = promoService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.display1 = false;
        this.display2 = false;
        this.display3 = false;
        this.msgs = [];
        this.add = false;
        this.sort = "id";
        this.devise = "FCFA";
        this.tva = 0.1925;
        this.val = 1;
        this.cart = new __WEBPACK_IMPORTED_MODULE_7__models_cart__["a" /* Cart */]('', 0, null, null, 0);
        this.panprods = [];
        this.products = [];
        this.promos = [];
        this.items3 = [];
        productService.products().subscribe(function (data) { return _this.products = data.body.content; });
        promoService.promoState(1).subscribe(function (data) { return _this.promos = data.body.content; });
        this.lengthPan = utilService.count();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilService.setComponent("home");
        this.type = this.route.snapshot.params['type'];
        this.sort = this.route.snapshot.params['sort'];
        this.search = this.route.snapshot.params['nameprod'];
        if (this.panprods.length == 0) {
            this.panprods = [];
            this.panprods = this.utilService.getPanProd();
        }
        if (this.cart.indexPan == '') {
            this.cart = new __WEBPACK_IMPORTED_MODULE_7__models_cart__["a" /* Cart */]('', 0, null, null, 0);
            this.cart = this.utilService.getCart();
        }
        if (this.sort === "priceasc") {
            this.productService.priceAsc().subscribe(function (data) { return _this.products = data.body.content; });
        }
        else if (this.sort === "pricedesc") {
            this.productService.priceDesc().subscribe(function (data) { return _this.products = data.body.content; });
        }
        else if (this.sort === "nameasc") {
            this.productService.nameAsc().subscribe(function (data) { return _this.products = data.body.content; });
        }
        else if (this.sort === "namedesc") {
            this.productService.nameDesc().subscribe(function (data) { return _this.products = data.body.content; });
        }
        else {
            this.productService.products().subscribe(function (data) { return _this.products = data.body.content; });
        }
        if (this.search !== "" || this.sort !== "undefined") {
            this.productService.searchProduct(this.search).subscribe(function (data) { return _this.products = data.body.content; });
        }
        this.items3 = [
            { label: 'sort ascending price', icon: 'fa fa-sort-asc', command: function () {
                    _this.priceasc();
                } },
            { label: 'sort descending price', icon: 'fa fa-sort-desc', command: function () {
                    _this.pricedesc();
                } },
            { label: 'Name - A to Z', icon: 'fa fa-sort-alpha-asc', command: function () {
                    _this.nameasc();
                } },
            { label: 'Name - Z to A', icon: 'fa fa-sort-alpha-desc', command: function () {
                    _this.namedesc();
                } }
        ];
        this.items4 = [
            { label: 'American dollar', icon: 'fa fa-dollar', command: function () {
                    _this.changeToDollar();
                } },
            { label: 'Cameroon FCFA', icon: 'fa fa-money', command: function () {
                    _this.changeToDefault();
                } },
            { label: 'European euro', icon: 'fa fa-euro', command: function () {
                    _this.changeToEuro();
                } },
        ];
        this.cols = [
            { field: 'produit', header: 'Produit' },
            { field: 'prix', header: 'Prix unitaire' },
            { field: 'nombre', header: 'Nombre' },
            { field: 'prix total', header: 'Prix total' }
        ];
    };
    HomeComponent.prototype.showDialog = function (id) {
        var _this = this;
        this.productService.product(id).subscribe(function (data) { return _this.product = data.body; });
        this.display1 = true;
    };
    HomeComponent.prototype.showDialogAdd = function (id, index) {
        var _this = this;
        this.productService.product(id).subscribe(function (data) { return _this.product = data.body; });
        this.saveIndex = index;
        this.val = 1;
        this.add = true;
        this.display1 = true;
    };
    HomeComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'product successfully added to cart' });
    };
    HomeComponent.prototype.AddToCard = function (id) {
        var _this = this;
        var index = this.utilService.isExist(id);
        if (index == -1) {
            this.utilService.addProd(id, this.val);
            this.lengthPan = this.utilService.count();
            this.productService.product(id).subscribe(function (data) { return _this.product = data.body; });
            this.hydrateCart();
        }
        else {
            this.productService.product(id).subscribe(function (data) { return _this.product = data.body; });
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
    };
    HomeComponent.prototype.CancelAdd = function () {
        this.display1 = false;
        this.add = false;
    };
    HomeComponent.prototype.CancelToCart = function (panprod) {
        var _this = this;
        var id = this.utilService.getIdprod(this.panprods.indexOf(panprod));
        this.productService.product(panprod.produit.id).subscribe(function (data) { return _this.product = data.body; });
        var nberProd = this.utilService.getNberProd(this.panprods.indexOf(panprod));
        this.utilService.rmvProd(this.panprods.indexOf(panprod));
        this.utilService.rmvPanProd(this.panprods.indexOf(panprod));
        this.panprods.splice(this.panprods.indexOf(panprod), 1);
        this.utilService.setSubTotal(panprod.produit.prixUnit * nberProd * (-1));
        this.cart.soldeTotal = this.utilService.getSubTotal();
        this.prixTaxe = this.roundDecimal(this.utilService.getSubTotal() * this.tva, 2);
        this.lengthPan = this.utilService.count();
    };
    HomeComponent.prototype.showCart = function () { this.display2 = true; };
    HomeComponent.prototype.hydrateCart = function () {
        var pp = new __WEBPACK_IMPORTED_MODULE_8__models_pan_prod__["a" /* PanProd */](null, null, 0, 0);
        var lastIndex = this.utilService.getLastIndex();
        var nberProd = this.utilService.getNberProd(lastIndex);
        if (this.utilService.count() == 1) {
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
    };
    HomeComponent.prototype.CancelBuy = function () { this.display2 = false; };
    HomeComponent.prototype.BuyNow = function () {
        this.utilService.setCart(this.cart);
        this.router.navigateByUrl('/share');
        this.display2 = false;
    };
    HomeComponent.prototype.changeToDollar = function () { this.devise = "dollar"; };
    HomeComponent.prototype.changeToEuro = function () { this.devise = "euro"; };
    HomeComponent.prototype.changeToDefault = function () { this.devise = "FCFA"; };
    HomeComponent.prototype.paginate = function (event) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
    };
    HomeComponent.prototype.priceasc = function () { this.router.navigateByUrl('/home/priceasc/priceasc'); };
    HomeComponent.prototype.pricedesc = function () { this.router.navigateByUrl('/home/pricedesc/pricedesc'); };
    HomeComponent.prototype.nameasc = function () { this.router.navigateByUrl('/home/nameasc/nameasc'); };
    HomeComponent.prototype.namedesc = function () { this.router.navigateByUrl('/home/namedesc/namedesc'); };
    HomeComponent.prototype.showPromotion = function () { this.display3 = true; };
    HomeComponent.prototype.cancelPromotion = function () { this.display3 = false; };
    HomeComponent.prototype.makeId = function () {
        var id = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return id;
    };
    HomeComponent.prototype.roundDecimal = function (nombre, precision) {
        var tmp = Math.pow(10, precision);
        return Math.round(nombre * tmp) / tmp;
    };
    HomeComponent.prototype.makeDate = function () {
        var date = new Date();
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    };
    HomeComponent.prototype.searchProd = function () {
        this.router.navigateByUrl('/home/search/' + this.search);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__services_promotion_service__["a" /* PromotionService */]],
            styles: [__webpack_require__("./src/app/home/home.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('goals', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["query"])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["query"])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["stagger"])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["keyframes"])([
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_5__services_promotion_service__["a" /* PromotionService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
var Cart = /** @class */ (function () {
    function Cart(indexPan, soldeTotal, client, dateJour, ack) {
        this.indexPan = indexPan;
        this.soldeTotal = soldeTotal;
        this.client = client;
        this.dateJour = dateJour;
        this.ack = ack;
    }
    return Cart;
}());



/***/ }),

/***/ "./src/app/models/pan-prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanProd; });
var PanProd = /** @class */ (function () {
    function PanProd(panier, produit, nbreExempl, prixTotal) {
        this.panier = panier;
        this.produit = produit;
        this.nbreExempl = nbreExempl;
        this.prixTotal = prixTotal;
    }
    return PanProd;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(firstName, lastName, email, telephone, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.username = username;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
    }
    CartService.prototype.cart = function (indexPan) {
        return this.http.get('http://localhost:8080/twmsos-api/paniers/' + indexPan, { observe: 'response' });
    };
    CartService.prototype.carts = function () {
        return this.http.get('http://localhost:8080/twmsos-api/paniers', { observe: 'response' });
    };
    CartService.prototype.panprods = function (indexPan) {
        return this.http.get('http://localhost:8080/twmsos-api/panprod/paniers/' + indexPan, { observe: 'response' });
    };
    CartService.prototype.cartsClient = function (username) {
        return this.http.get('http://localhost:8080/twmsos-api/paniers/client/' + username, { observe: 'response' });
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/momo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MomoService = /** @class */ (function () {
    function MomoService() {
    }
    MomoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MomoService);
    return MomoService;
}());



/***/ }),

/***/ "./src/app/services/om.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OmService = /** @class */ (function () {
    function OmService() {
    }
    OmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OmService);
    return OmService;
}());



/***/ }),

/***/ "./src/app/services/paypal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaypalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaypalService = /** @class */ (function () {
    function PaypalService(userService) {
        this.userService = userService;
    }
    PaypalService_1 = PaypalService;
    PaypalService.prototype.transaction = function (client, amount, paymode) {
        var _this = this;
        if (amount < PaypalService_1.cardAmount) {
            this.setCardAmount(amount * -1);
            this.userService.sendEmailTransaction(client.email, client.firstName, client.lastName, amount, paymode).subscribe(function (data) { return _this.ref = data.body; });
            return this.ref.code;
        }
        else {
            return "false";
        }
    };
    PaypalService.prototype.getCardAmount = function () {
        return PaypalService_1.cardAmount;
    };
    PaypalService.prototype.setCardAmount = function (amount) {
        PaypalService_1.cardAmount += amount;
    };
    PaypalService.cardAmount = 500000000;
    PaypalService = PaypalService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], PaypalService);
    return PaypalService;
    var PaypalService_1;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.products = function () {
        return this.http.get('http://localhost:8080/twmsos-api/produits', { observe: 'response' });
    };
    ProductService.prototype.product = function (id) {
        return this.http.get('http://localhost:8080/twmsos-api/produits/' + id, { observe: 'response' });
    };
    ProductService.prototype.prodType = function (type) {
        return this.http.get('http://localhost:8080/twmsos-api/typeprod/' + type, { observe: 'response' });
    };
    ProductService.prototype.nameAsc = function () {
        return this.http.get('http://localhost:8080/twmsos-api/produits/nomasc', { observe: 'response' });
    };
    ProductService.prototype.nameDesc = function () {
        return this.http.get('http://localhost:8080/twmsos-api/produits/nomdesc', { observe: 'response' });
    };
    ProductService.prototype.priceAsc = function () {
        return this.http.get('http://localhost:8080/twmsos-api/produits/prixasc', { observe: 'response' });
    };
    ProductService.prototype.priceDesc = function () {
        return this.http.get('http://localhost:8080/twmsos-api/produits/prixdesc', { observe: 'response' });
    };
    ProductService.prototype.searchProduct = function (nameprod) {
        return this.http.get('http://localhost:8080/twmsos-api/produits/nomprod/' + nameprod, { observe: 'response' });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/promotion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromotionService = /** @class */ (function () {
    function PromotionService(http) {
        this.http = http;
    }
    PromotionService.prototype.promos = function () {
        return this.http.get('http://localhost:8080/twmsos-api/promotions', { observe: 'response' });
    };
    PromotionService.prototype.promo = function (id) {
        return this.http.get('http://localhost:8080/twmsos-api/promotions/' + id, { observe: 'response' });
    };
    PromotionService.prototype.promoState = function (state) {
        return this.http.get('http://localhost:8080/twmsos-api/promotions/state/' + state, { observe: 'response' });
    };
    PromotionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PromotionService);
    return PromotionService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.users = function () {
        return this.http.get('http://localhost:8080/twmsos-api/users', { observe: 'response' });
    };
    UserService.prototype.auth1 = function (username) {
        return this.http.get('http://localhost:8080/twmsos-api/users/' + username, { observe: 'response' });
    };
    UserService.prototype.auth2 = function (email) {
        return this.http.get('http://localhost:8080/twmsos-api/users/' + email, { observe: 'response' });
    };
    UserService.prototype.sendEmail = function (email, lastname) {
        return this.http.get('http://localhost:8080/twmsos-api/users/sendmail/' + email + '/' + lastname, { observe: 'response' });
    };
    UserService.prototype.sendEmailTransaction = function (email, firstname, lastname, amount, paymode) {
        return this.http.get('http://localhost:8080/twmsos-api/users/sendmailtransaction/' + email + '/' + firstname + '/' + lastname + '/' + amount + '/' + paymode, { observe: 'response' });
    };
    UserService.prototype.addClient = function (client) {
        return this.http.post('http://localhost:8080/twmsos-api/users', client);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cart__ = __webpack_require__("./src/app/models/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__("./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilService = /** @class */ (function () {
    function UtilService() {
        this.saltRounds = 10;
    }
    UtilService_1 = UtilService;
    UtilService.prototype.addProd = function (id, nber) {
        UtilService_1.prodId.push(id);
        UtilService_1.nberProd.push(nber);
        if (UtilService_1.prodId.length > 0) {
            UtilService_1.lastIndex = this.count() - 1;
        }
    };
    UtilService.prototype.alreadyAdd = function (index, nberProd) {
        UtilService_1.nberProd[index] += nberProd;
    };
    UtilService.prototype.isExist = function (id) {
        return UtilService_1.prodId.indexOf(id);
    };
    UtilService.prototype.rmvProd = function (index) {
        UtilService_1.prodId.splice(index, 1);
        UtilService_1.nberProd.splice(index, 1);
    };
    UtilService.prototype.getIdprod = function (index) {
        return UtilService_1.prodId[index];
    };
    UtilService.prototype.getNberProd = function (id) {
        return UtilService_1.nberProd[id];
    };
    UtilService.prototype.getLastIndex = function () {
        return UtilService_1.lastIndex;
    };
    UtilService.prototype.getSubTotal = function () {
        return UtilService_1.subTotal;
    };
    UtilService.prototype.setSubTotal = function (total) {
        if (UtilService_1.prodId.length == 0) {
            UtilService_1.subTotal = 0;
        }
        UtilService_1.subTotal += total;
    };
    UtilService.prototype.setCart = function (cart) {
        UtilService_1.cart = cart;
    };
    UtilService.prototype.getCart = function () {
        return UtilService_1.cart;
    };
    UtilService.prototype.setPrixTotal = function (total) {
        UtilService_1.prixTotal = total;
    };
    UtilService.prototype.getPrixTotal = function () {
        return UtilService_1.prixTotal;
    };
    UtilService.prototype.count = function () {
        return UtilService_1.prodId.length;
    };
    UtilService.prototype.addPanProd = function (pp) {
        UtilService_1.pps.push(pp);
    };
    UtilService.prototype.updatePanProd = function (index, pp) {
        UtilService_1.pps[index] = pp;
    };
    UtilService.prototype.rmvPanProd = function (index) {
        UtilService_1.pps.splice(index, 1);
    };
    UtilService.prototype.getPanProd = function () {
        return UtilService_1.pps;
    };
    UtilService.prototype.crypt = function (passwordPlain) {
        return __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(passwordPlain).toString();
    };
    UtilService.prototype.compareHash = function (bdhash, passwordPlain) {
        if (bdhash == this.crypt(passwordPlain)) {
            return true;
        }
        else {
            return false;
        }
    };
    UtilService.prototype.getComponent = function () {
        return UtilService_1.component;
    };
    UtilService.prototype.setComponent = function (component) {
        UtilService_1.component = component;
    };
    UtilService.prototype.roundDecimal = function (nombre, precision) {
        var tmp = Math.pow(10, precision);
        return Math.round(nombre * tmp) / tmp;
    };
    UtilService.prodId = [];
    UtilService.nberProd = [];
    UtilService.lastIndex = 0;
    UtilService.subTotal = 0;
    UtilService.pps = [];
    UtilService.cart = new __WEBPACK_IMPORTED_MODULE_1__models_cart__["a" /* Cart */]('', 0, null, null, 0);
    UtilService = UtilService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
    var UtilService_1;
}());



/***/ }),

/***/ "./src/app/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row main\">\n\t\t<section class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12 main-login main-center\">\n      <ul class=\"nav nav-pills text-transform\">\n        <li class=\"active\" style=\"padding-left:10%;padding-right: 40%;\"><a href=\"#register\" data-toggle=\"tab\">Register</a></li>\n        <li style=\"padding-right:10%;\"><a href=\"#login\" data-toggle=\"tab\">Log in</a></li>\n      </ul>\n\t\t\t<hr class=\"nav-head\">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active fade in\" id=\"register\">\n\t\t\t\t\t<form class=\"\" novalidate [formGroup]=\"formreg\" (ngSubmit)=\"addUser()\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">First Name</label>\n\t\t\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" pInputText pKeyFilter=\"alpha\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"Enter your FirstName\"/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"vignets\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('firstname').touched && formreg.get('firstname').invalid\" class=\"cross-validation-error-message alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('firstname').hasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\tFirst name is required!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('firstname').hasError('minlength')\">\n\t\t\t\t\t\t\t\t\t\t\tLess than 2 characters!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('firstname').hasError('maxlength')\">\n\t\t\t\t\t\t\t\t\t\t\tMore than 30 characters!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">Last Name</label>\n\t\t\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" pInputText pKeyFilter=\"alpha\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"Enter your LastName\"/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"vignets\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('lastname').touched && formreg.get('lastname').invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('lastname').hasError('maxlength')\">\n\t\t\t\t\t\t\t\t\t\t\tMore than 30 characters!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\n\t\t\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" pInputText pKeyFilter=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Enter your Email\"/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"vignets\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('email').touched && formreg.get('email').invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('email').hasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\temail is required!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('email').hasError('email') && !formreg.get('email').hasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\tInvalid email!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"number\" class=\"cols-sm-2 control-label\">Your phone number</label>\n\t\t\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-mobile-phone fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" pInputText [pKeyFilter]=\"phoneNumber\" class=\"form-control\" formControlName=\"number\" id=\"number\" placeholder=\"Enter your phone number\"/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"vignets\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('number').touched && formreg.get('number').invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('number').hasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\tphone number is required!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('number').hasError('pattern')\">\n\t\t\t\t\t\t\t\t\t\t\tInvalid phone number, required 9 digits!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Your Username</label>\n\t\t\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" pInputText pKeyFilter=\"alphanum\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"Enter your Username\"/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"vignets\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('username').touched && formreg.get('username').invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('username').hasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\tUsername is required!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('username').hasError('minlength')\">\n\t\t\t\t\t\t\t\t\t\t\tLess than 4 characters!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('username').hasError('maxlength')\">\n\t\t\t\t\t\t\t\t\t\t\tMore than 30 characters!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Your Password</label>\n\t\t\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group pass_show\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" pInputText pKeyFilter=\"alphanum\" pPassword class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"Enter your Password\"/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon ptxt\">Show</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"vignets\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('password').touched && formreg.get('password').invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('password').hasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\tPassword is required!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('password').hasError('minlength')\">\n\t\t\t\t\t\t\t\t\t\t\tLess than 5 characters!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"confirm\" class=\"cols-sm-2 control-label\">Confirm Password</label>\n\t\t\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group pass_show\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" pInputText pKeyFilter=\"alphanum\" pPassword class=\"form-control\" formControlName=\"confirm\" id=\"confirm\" placeholder=\"Confirm your Password\"/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon ptxt\">Show</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"vignets\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(formreg.get('confirm').touched && formreg.get('confirm').invalid) || formreg.errors\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('confirm').hasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\tConfirm password is required!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.get('confirm').hasError('minlength')\">\n\t\t\t\t\t\t\t\t\t\t\tLess than 5 characters!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"formreg.errors.validPassword && !formreg.get('confirm').hasError('minlength') && !formreg.get('confirm').hasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\tThis password is not the same as the one above\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t<button pButton type=\"submit\" (click)=\"showInforms('reg')\" [disabled]=\"formreg.invalid\" label=\"Register\" icon=\"fa fa-registered\" tabindex=\"4\" class=\"form-control btn btn-raised btn-primary btn-lg btn-login\" style=\"font-weight:bold;\"></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t<div class=\"login-register\">\n\t\t\t\t\t\t  <a href=\"\">Veuillez bien sauvegarder ces informations</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"tab-pane fade in\" id=\"login\">\n\t\t\t\t\t<form class=\"\" novalidate [formGroup]=\"formlog\" (ngsubmit)=\"verifyUser()\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t <label for=\"useremail\" class=\"cols-sm-2 control-label\">Your username or email</label>\n\t\t\t\t\t\t\t <div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t <div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t <input type=\"text\" pInputText pKeyFilter=\"email\" class=\"form-control\" formControlName=\"useremail\" id=\"useremail\" placeholder=\"Enter your Username or Email\"/>\n\t\t\t\t\t\t\t\t\t <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t <div id=\"vignets\">\n\t\t\t\t\t\t\t <div *ngIf=\"formlog.get('useremail').touched && formlog.get('useremail').invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t <div *ngIf=\"formlog.get('useremail').hasError('required')\">\n\t\t\t\t\t\t\t\t\t Username or email is required!\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t <div *ngIf=\"formlog.get('useremail').hasError('minlength')\">\n\t\t\t\t\t\t\t\t\t Less than 4 characters!\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t <div *ngIf=\"formlog.get('useremail').hasError('maxlength')\">\n\t\t\t\t\t\t\t\t\t More than 30 characters!\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t <div class=\"form-group\">\n\t\t\t\t\t\t\t <label for=\"password\" class=\"cols-sm-2 control-label\">Your password</label>\n\t\t\t\t\t\t\t <div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t <div class=\"input-group pass_show\">\n\t\t\t\t\t\t\t\t\t <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t <input type=\"password\" pPassword pInputText pKeyFilter=\"alphanum\" class=\"form-control\" formControlName=\"password\" id=\"email\" placeholder=\"Enter your password\"/>\n\t\t\t\t\t\t\t\t\t <span class=\"input-group-addon ptxt\">Show</span>\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t <div id=\"vignets\">\n\t\t\t\t\t\t\t <div *ngIf=\"formlog.get('password').touched && formlog.get('password').invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t <div *ngIf=\"formlog.get('password').hasError('required')\">\n\t\t\t\t\t\t\t\t\t Password is required!\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t <div *ngIf=\"formlog.get('password').hasError('minlength')\">\n\t\t\t\t\t\t\t\t\t Less than 5 characters!\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t <hr>\n\t\t\t\t\t\t <div class=\"row\">\n\t\t\t\t\t\t\t <div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t <button pButton type=\"submit\" (click)=\"showInforms('log')\" [disabled]=\"formlog.invalid\" style=\"font-weight:bold;\" label=\"Log in\" icon=\"fa fa-hand-o-right\" tabindex=\"4\" class=\"form-control btn btn-raised btn-primary btn-lg btn-login\"></button>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t</form>\n\t      </div>\n      </div>\n    </section>\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n\t\t\t<p-panel>\n\t\t\t    <p-header>\n\t\t        <div class=\"ui-helper-clearfix\">\n\t\t            <span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px;font-weight:bold\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down fa-lg\" aria-hidden=\"true\"></i> Detail of My Cart\n\t\t\t\t\t\t\t\t</span>\n\t\t        </div>\n\t\t\t    </p-header>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t\t\t\t<caption><i class=\"form-item-1\">Cart code: </i>{{myCart.indexPan}}</caption>\n\t\t\t\t\t\t\t  <thead class=\"thead-dark\">\n\t\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t      <th scope=\"col\">N°</th>\n\t\t\t\t\t\t\t      <th scope=\"col\">Product</th>\n\t\t\t\t\t\t\t      <th scope=\"col\">number</th>\n\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t    <tr *ngFor=\"let myPanprod of myPanprods;let index=index\">\n\t\t\t\t\t\t\t      <th scope=\"row\">{{index}}</th>\n\t\t\t\t\t\t\t      <td>{{myPanprod.produit.nomProd}}</td>\n\t\t\t\t\t\t\t      <td>{{myPanprod.nbreExempl}}</td>\n\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t    <p-footer class=\"price\">\n\t\t\t        <span> {{solde}} FCFA</span>\n\t\t\t    </p-footer>\n\t\t\t</p-panel>\n\t\t</div>\n\t</div>\n</div>\n<p-dialog header=\"Your informations\" [(visible)]=\"display4\" [modal]=\"true\" [responsive]=\"true\" [width]=\"400\" [minWidth]=\"200\" [minY]=\"70\"\n\t\t\t[maximizable]=\"false\" [baseZIndex]=\"10000\" [closeOnEscape]=\"false\" [closable]=\"false\" (onHide)=\"display4=false\" class=\"ui-dialog-titlebar\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-11\">\n\t\t\t<div class=\"ui-dialog-content\">\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item\">FirstName: <i class=\"form-item\">{{formreg.get('firstname').value}}</i></li>\n\t\t\t\t\t<li class=\"list-group-item\">LastName: <i class=\"form-item\">{{formreg.get('lastname').value}}</i></li>\n\t\t\t\t\t<li class=\"list-group-item\">Email: <i class=\"form-item\">{{formreg.get('email').value}}</i></li>\n\t\t\t\t\t<li class=\"list-group-item\">Phone number: <i class=\"form-item\">{{formreg.get('number').value}}</i></li>\n\t\t\t\t\t<li class=\"list-group-item\">Username: <i class=\"form-item\">{{formreg.get('username').value}}</i></li>\n\t\t\t\t\t<li class=\"list-group-item\">Password: <i class=\"form-item\">{{formreg.get('password').value}}</i></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<p-footer class=\"ui-dialog-footer\">\n\t\t\t<button type=\"button\" pButton icon=\"fa fa-thumbs-o-up\" (click)=\"saveInform()\" label=\"I confirm them\"></button>\n\t\t\t<button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"display4=false\" label=\"Cancel\"></button>\n\t</p-footer>\n</p-dialog>\n\n<p-dialog header=\"Entrez le code d'authentification\" [(visible)]=\"display5\" [modal]=\"true\" [responsive]=\"true\" [width]=\"300\" [minWidth]=\"200\" [minY]=\"70\"\n      [maximizable]=\"false\" [baseZIndex]=\"10000\" [closable]=\"false\" class=\"ui-dialog-titlebar\" (onHide)=\"display5=false\">\n\t<p-header><hr>\n        <span class=\"code-head\"> Un email a été envoyé à cette adresse, il contient le code d'authentification à entrer dans ce champ,\n\t\t\t\t\tveuillez donc consulter votre boîte mail</span>\n  </p-header>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-11\">\n      <div class=\"ui-dialog-content\">\n\t\t\t\t\t<span class=\"ui-float-label\">\n\t\t\t\t\t\t\t<input id=\"float-input\" type=\"text\" size=\"13\" pInputText [(ngModel)]=\"authCode\" class=\"form-control\"/>\n\t\t\t\t\t    <label for=\"float-input\" class=\"floatlabel\">Authentification code</label>\n\t\t\t\t\t</span>\n      </div>\n    </div>\n  </div>\n  <p-footer class=\"ui-dialog-footer\">\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"auth()\" label=\"Soumettre\"></button>\n      <button type=\"button\" icon=\"fa fa-close\" pButton  (click)=\"display5=false\" label=\"Annuler\"></button>\n  </p-footer>\n</p-dialog>\n\n<p-dialog header=\"Error on authentification code\" [(visible)]=\"display6\" [modal]=\"true\" [responsive]=\"true\" [width]=\"300\" [minWidth]=\"200\" [minY]=\"70\"\n      [maximizable]=\"false\" [baseZIndex]=\"10000\" [closable]=\"false\" class=\"ui-dialog-titlebar\" (onHide)=\"onConfirm()\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-11\">\n      <div class=\"ui-dialog-content messageState\" style=\"color: green\" *ngIf=\"error!=='true'\">\n\t\t\t\t\t{{message}}\n      </div>\n\t\t\t<div class=\"ui-dialog-content messageState\" style=\"color: red\" *ngIf=\"error==='true'\">\n\t\t\t\t\t{{message}}\n      </div>\n    </div>\n  </div>\n  <p-footer class=\"ui-dialog-footer\">\n      <button type=\"button\" icon=\"fa fa-check\" pButton  (click)=\"onConfirm()\" label=\"Ok\"></button>\n  </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/share/share.component.scss":
/***/ (function(module, exports) {

module.exports = "h1.title {\n  font-size: 50px;\n  font-family: 'Passion One', cursive;\n  font-weight: 400; }\n\nhr {\n  width: 10%;\n  color: #fff; }\n\nh2 {\n  font-weight: bold;\n  font-size: 2.5em;\n  font-family: \"Times New Roman\", Times, serif;\n  color: #1E90FF;\n  text-align: center;\n  text-transform: uppercase; }\n\n.form-group {\n  margin-bottom: 15px; }\n\nlabel {\n  margin-bottom: 15px; }\n\ninput,\ninput::-webkit-input-placeholder {\n  font-size: 11px;\n  padding-top: 3px; }\n\n.form-control {\n  height: auto !important;\n  padding: 8px 12px !important; }\n\n.input-group {\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.21) !important;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.21) !important; }\n\nspan.input-group-addon i {\n  color: #009edf;\n  font-size: 17px; }\n\n.btn-login {\n  background-color: #59B2E0;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #59B2E6; }\n\n.btn-login:hover,\n.btn-login:focus {\n  color: #fff;\n  background-color: #53A3CD;\n  border-color: #53A3CD; }\n\n.nav-head {\n  color: #000;\n  width: 50%; }\n\n.text-transform {\n  font-weight: bold;\n  font-size: 20px;\n  color: #1E90FF;\n  text-align: center; }\n\n.price {\n  text-align: center;\n  font-weight: bold;\n  height: 25px;\n  width: auto; }\n\n.pass_show {\n  position: relative; }\n\n.pass_show .ptxt {\n  cursor: pointer;\n  font-weight: bold;\n  color: #000; }\n\n.pass_show .ptxt:hover {\n  color: #1E90FF; }\n\n#vignets div {\n  -webkit-animation: fadein 2s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 2s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.floatlabel, .messageState {\n  font-weight: bold;\n  font-size: 12px;\n  color: #1E90FF; }\n"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__("./src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_cart__ = __webpack_require__("./src/app/models/cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShareComponent = /** @class */ (function () {
    //email: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    function ShareComponent(utilService, userService, router) {
        this.utilService = utilService;
        this.userService = userService;
        this.router = router;
        this.display4 = false;
        this.display5 = false;
        this.display6 = false;
        this.blockSpecial = /^[^<>*!]+$/;
        this.phoneNumber = /^[0-9]+$/;
        this.myPanprods = [];
        this.myCart = new __WEBPACK_IMPORTED_MODULE_6__models_cart__["a" /* Cart */]('', 0, null, null, 0);
        this.solde = 0;
        this.authCode = "";
        this.client = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]('', '', '', '', '', '');
        this.message = "";
        this.error = "false";
        this.myPanprods = utilService.getPanProd();
        this.myCart = utilService.getCart();
        this.solde = utilService.getPrixTotal();
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.utilService.setComponent("share");
        this.formreg = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            firstname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30)]),
            lastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(0), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]),
            number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{9}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(9)]),
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30)]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5)]),
            confirm: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5)])
        }, this.passwordMatchValidator);
        this.formlog = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            useremail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5)])
        });
    };
    ShareComponent.prototype.addUser = function () {
        console.log(this.formreg.value.firstname);
    };
    ShareComponent.prototype.verifyUser = function () {
        console.log(this.formlog.value);
    };
    ShareComponent.prototype.showDialogCode = function () {
        this.display5 = true;
    };
    ShareComponent.prototype.showInforms = function (type) {
        this.type = type;
        this.display4 = true;
    };
    ShareComponent.prototype.auth = function () {
        var _this = this;
        if (this.authCode == this.goodCode.code) {
            this.userService.addClient(this.client)
                .subscribe(function (data) { _this.message = "Succesfully Added account TW Micronics"; _this.showState(); }, function (Error) { _this.message = "failed while adding your account"; _this.showState(); });
            this.showState();
            this.router.navigateByUrl('/buy');
        }
        else {
            this.message = "Code d'authentification incorrecte, veuillez vérifier votre boîte mail...";
            this.error = "true";
            this.showState();
        }
    };
    ShareComponent.prototype.saveInform = function () {
        var _this = this;
        //Building informations
        this.display4 = false;
        if (this.type === 'reg') {
            this.client.firstName = this.formreg.value.firstname,
                this.client.lastName = this.formreg.get('lastname').value,
                this.client.email = this.formreg.get('email').value,
                this.client.telephone = this.formreg.get('number').value,
                this.client.username = this.formreg.get('username').value,
                this.client.password = this.utilService.crypt(this.formreg.get('password').value);
            this.myCart.client = this.client;
            this.utilService.setCart(this.myCart);
            this.userService.sendEmail(this.formreg.get('email').value, this.formreg.get('lastname').value).subscribe(function (data) { return _this.goodCode = data.body; });
            this.showDialogCode();
        }
        else if (this.type === 'log') {
            this.userService.auth2(this.formreg.get('email').value).subscribe(function (data) { return _this.client = data.body; });
            this.myCart.client = this.client;
            this.utilService.setCart(this.myCart);
            this.router.navigateByUrl('/buy');
        }
    };
    ShareComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirm').value
            ? null : { 'validPassword': true };
    };
    ShareComponent.prototype.showState = function () {
        this.display6 = true;
    };
    ShareComponent.prototype.onConfirm = function () {
        this.message = "";
        this.display6 = false;
    };
    ShareComponent.prototype.maskPassword = function (password) {
        var maskPass = '';
        for (var i = 0; i < password.length; i++) {
            maskPass += '*';
        }
        return maskPass;
    };
    ShareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-share',
            template: __webpack_require__("./src/app/share/share.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]],
            styles: [__webpack_require__("./src/app/share/share.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map