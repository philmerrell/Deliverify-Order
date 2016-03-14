import {Page, NavParams, NavController, Modal} from 'ionic/ionic';
import {Injectable} from "angular2/angular2";
import {IngredientsModal} from "../ingredients-modal/ingredientsModal";
import {MenuData} from '../data/menu';
import {CartService} from '../data/cart';


@Injectable()
@Page({
    templateUrl: 'app/menu-detail/menuDetail.html'
})

export class MenuDetail {
    constructor(params: NavParams, modal: Modal, menu: MenuData, nav: NavController, cart: CartService) {
        this.item = _.cloneDeep(params.get('item'));
        this.order = [];
        this.cart = cart;
        this.modal = modal;
        this.menu = menu;
        this.nav = nav;
        this.initOrder();
    }

    addToCart() {
        this.cart.addToCart(this.order);
        this.cart.setShowToast(true, "Item added to order");
        this.nav.pop();
    }

    addToOrder(item) {

    }

    getOrder() {

    }

    initOrder() {
        this.order.push(this.item);
    }

    showIngredientsModal(ingredients) {
        this.menu.setIngredients(ingredients);
        this.modal.open(IngredientsModal);
    }

}