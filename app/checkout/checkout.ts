import {Page, Modal} from "ionic/ionic";
import {CartService} from "../data/cart";
import {UserService} from "../services/UserService";
import {AuthService} from "../services/AuthService";
import {LocationModal} from "../location-modal/location-modal";
import {PaymentModal} from "../payment-modal/payment-modal";

@Page({
    templateUrl: 'app/checkout/checkout.html'
})

export class Checkout {
    cartService: CartService;
    userService: UserService;
    authService: AuthService;
    modal: Modal;
    currentUser: any;
    stripeHandler: any;

    constructor(cartService: CartService, userService: UserService, authService: AuthService, modal: Modal) {
        this.cartService = cartService;
        this.userService = userService;
        this.authService = authService;
        this.modal = modal;
        this.stripeHandler = {};

        this.initStripeCheckout();
        this.currentUser = this.userService.getCurrentUser();

        userService.userEmitter.subscribe(user => {
            console.log(user);
            this.currentUser = user;
        });
    }

    authWithGithub() {
        this.authService.authWithGithub()
    }

    openLocationModal() {
        this.modal.open(LocationModal);
    }

    openPaymentModal() {
        this.modal.open(PaymentModal);
    }

    initStripeCheckout() {
        //this.stripeHandler = StripeCheckout.configure({
        //    key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
        //    image: '/img/documentation/checkout/marketplace.png',
        //    locale: 'auto',
        //    token: function(token) {
        //        // Use the token to create the charge with a server-side script.
        //        // You can access the token ID with `token.id`
        //    }
        //});
    }

    pay(event) {
        //this.stripeHandler.open({
        //    name: 'Stripe.com',
        //    description: '2 widgets',
        //    amount: 2000
        //});
        //event.preventDefault()
    }



}

