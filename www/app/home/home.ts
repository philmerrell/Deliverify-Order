import {Page, NavController, Modal, Tabs} from 'ionic/ionic';
import {UserService} from "../services/UserService";
import {AuthService} from "../services/AuthService";
import {Checkout} from '../checkout/checkout';
import {CartService} from '../data/cart';
import {LocationModal} from "../location-modal/location-modal";
import {PaymentModal} from "../payment-modal/payment-modal";


@Page({
  templateUrl:'app/home/home.html',
})

export class Home {
  userService: UserService;
  authService: AuthService;
  currentUser: any;

  constructor(authService: AuthService, cartService: CartService, userService: UserService, nav: NavController, modal: Modal, tabs: Tabs) {
    this.userService = userService;
   
    // this.authService = authService;
    this.cartService = cartService;
    this.modal = modal;
    this.tabs = tabs;
    this.nav = nav;
    this.available = false;
    // this.currentUser = this.userService.getCurrentUser();
    // this.userService.userEmitter.subscribe((user) => {
    //   this.currentUser = user;
    // });
  }
  
  getLocation() {
    // TODO: change to 'this.inDeliveryRange'
    this.available = true;
     
  }

  orderSpecial() {
    
    var special = [
      {
        Name: "The Veggie",
        Price: 5.25,
        Group: "Sandwiches",
        Customizable: true,
        Ingredients: [
          { Name: "Bread", Type: "Select", Required: true, Options: ["Wheat", "Sour Dough", "7 Grain", "Rye", "Bagette"]},
          { Name: "roast beef", Type: "Checkbox", Required: false, Ordered: true },
          { Name: "smoked ham", Type: "Checkbox", Required: false, Ordered: true },
          { Name: "provolone cheese", Type: "Checkbox", Required: false, Ordered: true },
          { Name: "dijon mustard", Type: "Checkbox", Required: false, Ordered: true },
          { Name: "lettuce", Type: "Checkbox", Required: false, Ordered: true },
          { Name: "tomato", Type: "Checkbox", Required: false, Ordered: true },
          { Name: "mayo", Type: "Checkbox", Required: false, Ordered: true }
        ],
        Image: "http://www.seriouseats.com/images/2011/07/20110714-161185antipastofocaccia.jpg",
        Path: "the-biggin"
      },
      {
        Name: "Coke",
        Price: 1.59,
        Group: "Drinks",
        Customizable: false,
        Ingredients: [],
        Image: "https://img-new.cgtrader.com/items/146818/large_realistic_coca_cola_can_3d_model_3ds_fbx_c4d_obj__655ab928-6598-46f6-aed8-bff3c86febbb.jpg",
        Path: "coke"
      }
    ];

    this.cartService.addToCart(special);
  }
  
  viewMenu() {
    this.tabs.select(1);
  }



  // authWithGithub() {
  //   this.authService.authWithGithub()
  // }

   checkout() {
     //this.modal.open(Checkout);
     this.nav.push(Checkout);
   }
  
  // openLocationModal() {
  //       this.modal.open(LocationModal);
  // }

  // openPaymentModal() {
  //     this.modal.open(PaymentModal);
  // }

}

