import {Injectable} from "angular2/angular2";
@Injectable()
export class MenuData {
    constructor() {
        this.modalItem = [];
        this.menu = [
            {
                Name: "The Italian",
                Group: "Sandwiches",
                Price: 6.24,
                Customizable: true,
                Ingredients: [
                    { Name: "Bread", Type: "Select", Required: true, Ordered: true, Options: ["Wheat", "Sour Dough", "7 Grain", "Rye", "Bagette"]},
                    { Name: "Real genoa salami", Type: "Checkbox", Required: false, Ordered: true},
                    { Name: "Italian capicola", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "smoked ham", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "provolone cheese", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "lettuce", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "tomato", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "onion", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "mayo", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "Italian vinaigrette", Type: "Checkbox", Required: false, Ordered: true }
                ],
                Image: "http://cds.arbys.com/images/menu/mf-turkey-swiss-sandwich-1024x557.jpg",
                Path: "turkey-surprise"
            },
            {
                Name: "El Hefe",
                Group: "Sandwiches",
                Price: 5.56,
                Customizable: true,
                Ingredients: [
                    { Name: "Bread", Type: "Select", Required: true, Options: ["Wheat", "Sour Dough", "7 Grain", "Rye", "Bagette"]},
                    { Name: "Applewood smoked ham", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "provolone cheese", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "lettuce", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "tomato", Type: "Checkbox", Required: false, Ordered: true },
                    { Name: "mayo", Type: "Checkbox", Required: false, Ordered: true }
                ],
                Image: "http://ionicframework.com/docs/v2/components/demo/img/advance-card-map-madison.png",
                Path: "el-hefe"
            }
        ];
    }

    all() {
        return this.menu;
    }

    setIngredients(item) {
        this.modalItem = item;
    }

    getIngredients() {
        return this.modalItem;
    }
}