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
    currentUser: any;

    constructor(cartService: CartService, userService: UserService, authService: AuthService, modal: Modal) {
        this.cartService = cartService;
        this.userService = userService;
        this.authService = authService;
        this.milestones = 0;
        this.modal = modal;
        this.currentUser = this.userService.getCurrentUser();
    }

    initMilestones() {
        if(this.currentUser) {
            this.milestones = this.milestones + 1;
        }
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

}

