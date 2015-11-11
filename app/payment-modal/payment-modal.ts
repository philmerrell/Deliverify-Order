import {Page} from "ionic/ionic";
import {UserService} from "../services/UserService";

@Page({
    templateUrl: 'app/payment-modal/payment-modal.html'
})

export class PaymentModal {
    userService: UserService;
    paymentMethod: any;
    constructor(userService: UserService) {
        this.paymentMethod = {};
        this.userService = userService;
    }

    addPaymentMethodToUser(paymentMethod) {
        this.userService.addPaymentMethodToUser(paymentMethod);
        this.close();
    }

}