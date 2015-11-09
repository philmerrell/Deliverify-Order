import {Page} from 'ionic/ionic';
import {UserService} from "../services/UserService";
import {AuthService} from "../services/AuthService";

@Page({
  templateUrl:'app/account/account.html',
})

export class Account {
  userService: UserService;
  authService: AuthService;
  currentUser: any;

  constructor(authService: AuthService, userService: UserService) {
    this.userService = userService;
    this.authService = authService;
    this.currentUser = this.userService.getCurrentUser();
    this.userService.userEmitter.subscribe((user) => {
      this.currentUser = user;
    });
  }

  authWithGithub() {
    this.authService.authWithGithub()
  }

}

