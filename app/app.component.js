"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var PRODUCTS = [
    { id: 11, name: 'Apple TV' },
    { id: 12, name: 'IPhone' },
    { id: 13, name: 'Apple Watch' },
    { id: 14, name: 'Asus Laptop' },
    { id: 15, name: 'Backpack' },
    { id: 16, name: 'Samsun TV' },
    { id: 17, name: 'Samsun galaxi' },
    { id: 18, name: 'Sony TV' },
    { id: 19, name: 'Toshiba Labtop' },
    { id: 20, name: 'LG TV' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Products';
        this.products = PRODUCTS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    AppComponent = __decorate([
        core_1.Component({
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .products {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .products li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .products li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .products li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .products .text {\n    position: relative;\n    top: -3px;\n  }\n  .products .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  \n  <h2>My Products</h2>\n  <ul class=\"products\">\n     <li *ngFor=\"let product of products\" (click)=\"onSelect(product)\" [class.selected]=\"product === selectedProduct\"\n>\n        <span class=\"badge\">{{product.id}}</span> {{product.name}}\n    </li>\n  </ul>\n  <div *ngIf=\"selectedProduct\">\n      <h2>{{selectedProduct.name}} details!</h2>  \n      <div><label>id: </label>{{selectedProduct.id}}</div>\n      \n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedProduct.name\" placeholder=\"name\">\n      </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map