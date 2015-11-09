import {Page} from "ionic/ionic";
import {CartService} from "../data/cart";
import {UserService} from "../services/UserService";
import {AuthService} from "../services/AuthService";

@Page({
    templateUrl: 'app/checkout-modal/checkout-modal.html'
})

export class CheckoutModal {
    cartService: CartService;
    userService: UserService;
    authService: AuthService;
    currentUser: any;

    constructor(cartService: CartService, userService: UserService, authService: AuthService) {
        this.cartService = cartService;
        this.userService = userService;
        this.authService = authService;
        this.currentUser = this.userService.getCurrentUser();
    }

    authWithGithub() {
        this.authService.authWithGithub()
    }

}

