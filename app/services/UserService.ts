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
        this.currentUser = false;
        this.userEmitter = this._emitter.toRx();
    }

    setCurrentUser(newUser): void {
        this.currentUser = newUser;
        this.userEmitter.next(newUser);
    }

    getCurrentUser() {
        return this.currentUser;
    }
}