/**
 * Created by philmerrell on 11/4/15.
 */
import {Injectable, EventEmitter} from "angular2/angular2";

@Injectable()
export class UserService {
    _emitter: EventEmitter = new EventEmitter();
    userEmitter: any;
    currentUser: any;

    constructor() {
        this.currentUser = {
            Locations: []
        };
        this.userEmitter = this._emitter.toRx();
    }

    setCurrentUser(newUser): void {
        this.currentUser = newUser;
        this.currentUser.Locations = [];
        this.currentUser.Payments = [];

        this.userEmitter.next(newUser);
    }

    getCurrentUser() {
        return this.currentUser;
    }

    addLocationToUser(location) {

        this.currentUser.Locations.push(location);
        this.userEmitter.next(this.currentUser);
    }

    addPaymentMethodToUser(paymentMethod) {

        this.currentUser.Payments.push(paymentMethod);
        this.userEmitter.next(this.currentUser);
    }
}