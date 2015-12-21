import {Page, NavController, ViewController, Tabs} from 'ionic/ionic';
import {MenuData} from '../data/menu';
import {MenuDetail} from '../menu-detail/menuDetail';
import {Checkout} from '../checkout/checkout';
import {CartService} from '../data/cart';


@Page({
  templateUrl: 'app/menu/menu.html',
})
export class Menu {
  constructor(cartService: CartService, menu: MenuData, nav: NavController, view: ViewController, tabs: Tabs) {
    this.menu = menu;
    this.tabs = tabs;
    this.cartService = cartService;
    this.nav = nav;
    this.view = view;
    this.items = menu.all();
    // this.menuGroups = _.groupBy(menu.all(), 'Group');


  }

  viewItem(item) {
    this.nav.push(MenuDetail, {
      item: item
    });
  }
  
  getItems() {
    
    var a = Object.keys(this.menuGroups).map(key => this.menuGroups[key]);
  
    return a;
  }
  
  addToCart(item, event) {
    console.log(event);
      event.stopPropagation();
      this.cartService.addToCart(item);
      this.cartService.setShowToast(true);
  }

  checkout() {
    // this.modal.open(Checkout);
    // this.tabs.select(2);
    this.nav.push(Checkout);

  }

}
