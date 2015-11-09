import {Page, Modal} from 'ionic/ionic';
import {Menu} from '../menu/menu';
import {Cart} from '../cart/cart';
import {Account} from '../account/account';
import {CheckoutModal} from '../checkout-modal/checkout-modal';
import {CartService} from '../data/cart';

@Page({
  templateUrl: 'app/tabs/tabs.html'
})

export class TabsPage {
  constructor(cartService: CartService, modal: Modal) {
    this.MenuRoot = Menu;
    this.CartRoot = Cart;
    this.AccountRoot = Account;
    this.cartService = cartService;
    this.modal = modal;
    this.toast = false;
    this.cartService.cartEmitter.subscribe((value) => {
      this.toast = value;
      setTimeout(() => {
        this.toast = !value;
      }, 4000);
    });


  }

  getTotal() {
    var total = this.cartService.getOrderTotal();

    if(total === '0.00') {
      return 'Cart';
    } else {
      return '$'+total;
    }
  }

  checkout() {
    this.modal.open(CheckoutModal);
  }



}
