import {Page, NavController, ViewController} from 'ionic/ionic';
import {MenuData} from '../data/menu';
import {MenuDetail} from '../menu-detail/menuDetail';
import {Checkout} from '../checkout/checkout';


@Page({
  templateUrl: 'app/menu/menu.html',
})
export class Menu {
  constructor(menu: MenuData, nav: NavController, view: ViewController) {
    this.menu = menu;
    this.nav = nav;
    this.view = view;
    this.menuItems = menu.all();
  }

  viewItem(item) {
    this.nav.push(MenuDetail, {
      item: item
    });
  }

  checkout() {
    //this.modal.open(Checkout);
    this.nav.push(Checkout);
  }

}
