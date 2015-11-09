import {Page} from "ionic/ionic";
import {CartService} from "../data/cart";
import {UserService} from "../data/user";

@Page({
    templateUrl: 'app/checkout-modal/checkout-modal.html'
})

export class CheckoutModal {
    constructor(cartService: CartService, userService: UserService) {
        this.cartService = cartService;
        this.userService = userService;
    }

}

