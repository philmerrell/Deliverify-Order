import {Page} from "ionic/ionic";
import {UserService} from "../services/UserService";

@Page({
    templateUrl: 'app/payment-modal/payment-modal.html'
})

export class PaymentModal {
    userService: UserService;
    paymentMethod: any;
    card: Card;
    constructor(userService: UserService) {
        this.paymentMethod = { number: '424242424242'};
        this.userService = userService;
        this.card = new Card({
            form: 'form',
            container: '.card-wrapper'
        });
    }

    addPaymentMethodToUser(paymentMethod) {
        this.userService.addPaymentMethodToUser(paymentMethod);
        this.paymentMethod = {};
        this.card = {};
        this.close();
    }

}