import {Page} from 'ionic/ionic';
import {Control, ControlGroup} from 'angular2/angular2';

@Page({
  templateUrl:'app/account/account.html',
})
export class Account {
  constructor(){
    this.settings = new ControlGroup({
      enableFriends: new Control(true)
    });
  }
}

