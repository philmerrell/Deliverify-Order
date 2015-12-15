import {Page, Modal, NavController} from 'ionic/ionic';
import {Home} from '../home/home';
import {Menu} from '../menu/menu';
import {Cart} from '../cart/cart';
import {Account} from '../account/account';
import {Checkout} from '../checkout/checkout';
import {CartService} from '../data/cart';

@Page({
  templateUrl: 'app/tabs/tabs.html'
})

export class TabsPage {
  constructor(cartService: CartService, modal: Modal, nav: NavController) {
    this.MenuRoot = Menu;
    this.CartRoot = Cart;
    this.HomeRoot = Home;
    this.AccountRoot = Account;
    this.cartService = cartService;
    this.modal = modal;
    this.nav = nav;
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

}
