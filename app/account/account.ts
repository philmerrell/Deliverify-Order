import {Page, NavController, Modal} from 'ionic/ionic';
import {UserService} from "../services/UserService";
import {AuthService} from "../services/AuthService";
import {Checkout} from '../checkout/checkout';
import {CartService} from '../data/cart';
import {LocationModal} from "../location-modal/location-modal";
import {PaymentModal} from "../payment-modal/payment-modal";


@Page({
  templateUrl:'app/account/account.html',
})

export class Account {
  userService: UserService;
  authService: AuthService;
  currentUser: any;

  constructor(authService: AuthService, cartService: CartService, userService: UserService, nav: NavController, modal: Modal) {
    this.userService = userService;
    this.authService = authService;
    this.cartService = cartService;
    this.modal = modal;
    this.nav = nav;
    this.currentUser = this.userService.getCurrentUser();
    this.userService.userEmitter.subscribe((user) => {
      this.currentUser = user;
    });
  }

  authWithGithub() {
    this.authService.authWithGithub()
  }

  checkout() {
    //this.modal.open(Checkout);
    this.nav.push(Checkout);
  }
  
  openLocationModal() {
        this.modal.open(LocationModal);
  }

  openPaymentModal() {
      this.modal.open(PaymentModal);
  }

}

