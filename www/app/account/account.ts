import {Page, NavController} from 'ionic/ionic';
import {UserService} from "../services/UserService";
import {AuthService} from "../services/AuthService";
import {Checkout} from '../checkout/checkout';


@Page({
  templateUrl:'app/account/account.html',
})

export class Account {
  userService: UserService;
  authService: AuthService;
  currentUser: any;

  constructor(authService: AuthService, userService: UserService, nav: NavController) {
    this.userService = userService;
    this.authService = authService;
    this.nav = nav;
    this.currentUser = this.userService.getCurrentUser();
    this.userService.userEmitter.subscribe((user) => {
      this.currentUser = user;
    });
  }

  authWithGithub() {
    this.authService.authWithGithub()
  }

  checkout() {
    //this.modal.open(Checkout);
    this.nav.push(Checkout);
  }

}

