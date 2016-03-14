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
        this.stripeHandler = StripeCheckout.configure({
           key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
           image: 'img/logo.png',
           locale: 'auto',
           token: (token) => {
               // Use the token to create the charge with a server-side script.
               // You can access the token ID with `token.id`
               console.log('token: ', token);

               this.completeOrder(token);

               this.resetCart();
               alert("End of new user checkout flow");
               
           }
        });
    }

    pay(event) {
        event.preventDefault();
        this.stripeHandler.open({
           name: 'Appwich',
           description: this.cartService.getOrderDescription(),
           amount: this.cartService.getTotalForStripe()
        });
        
    }

    completeOrder(token) {
        var order = {
            user: token,
            cart: this.cartService.getCart(),
            timeSubmitted: Firebase.ServerValue.TIMESTAMP,
            total: this.cartService.getOrderTotal(),
            deliveryAddress: this.userService.getLocation(),
            orderStatus: 'Order submitted',
            progress: 'Ordered'
        };
        var ref = new Firebase("https://philmerrell.firebaseio.com/orders/");
        ref.push(order);
    }
    
    resetCart() {
        this.cartService.resetCart();
        
    }

}

