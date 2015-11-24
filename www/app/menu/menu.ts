import {Page, NavController, ViewController} from 'ionic/ionic';
import {MenuData} from '../data/menu';
import {MenuDetail} from '../menu-detail/menuDetail';
import {Checkout} from '../checkout/checkout';
import {CartService} from '../data/cart';


@Page({
  templateUrl: 'app/menu/menu.html',
})
export class Menu {
  constructor(cartService: CartService, menu: MenuData, nav: NavController, view: ViewController) {
    this.menu = menu;
    this.cartService = cartService;
    this.nav = nav;
    this.view = view;
    this.items = menu.all();
    console.log(this.items);
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

  checkout() {
    //this.modal.open(Checkout);
    this.nav.push(Checkout);
  }

}
