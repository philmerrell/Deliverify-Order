import {App, Platform, StatusBar} from 'ionic/ionic';
import {TabsPage} from './tabs/tabs';
import {MenuData} from './data/menu';
import {CartService} from './data/cart';
import {UserService} from './data/user';


@App({
  template: '<ion-nav [root]="root"></ion-nav>',
  providers: [MenuData, CartService, UserService]
})

export class TabsPage {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = TabsPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
