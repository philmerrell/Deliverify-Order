import * as _ from "lodash";
import {Injectable, EventEmitter} from "angular2/angular2";
import * as Rx from "rx";

@Injectable()
export class CartService {
    _emitter: EventEmitter = new EventEmitter();
    _emitter2: EventEmitter = new EventEmitter();
    cartEmitter: any;
    toastEmitter: any;
    constructor() {
        this.cart = [];
        this.total = 0;
        this.order = {};
        this.toast = false;
        this.cartEmitter = this._emitter.toRx();
        this.toastEmitter = this._emitter2.toRx();
    }

    addToCart(items) {
        this.cart = this.cart.concat(items);
        this.cartEmitter.next(this.cart);
    }

    getCart() {
        return this.cart;
    }
    
    // Used in stripe checkout description field
    getOrderDescription() {
        var itemNames = '';
        _.forEach(this.cart, (item, index) => {
           itemNames += item.Name + ', '
        });
        
        return itemNames;
    }

    getOrderTotal() {
        var total = 0;
        _.forEach(this.cart, item => {
            total += item.Price;
        });

        return total.toFixed(2);
    }
    
    getTotalForStripe() {
        var total = 0;
        _.forEach(this.cart, item => {
            total += item.Price;
        });
        return total * 100;
    }

    removeItemFromCart(item) {
        _.pull(this.cart, item);
    }

    getShowToast() {
        return this.toast;
    }
    
    resetCart() {
        this.cart = [];
        this.cartEmitter.next(this.cart);
    }

    setShowToast(bool) {
        setTimeout(() => {
           this.toastEmitter.next(!bool);
        }, 2000);
    }

}