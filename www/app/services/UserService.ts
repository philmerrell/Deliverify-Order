/**
 * Created by philmerrell on 11/4/15.
 */
import {Injectable} from "angular2/angular2";
import * as Rx from "rx";
import {User} from "../models/User";

Injectable()
export class UserService {
    currentUser: Rx.Subject<User> = new Rx.BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User): void {
        this.currentUser.onNext(newUser);
    }
}