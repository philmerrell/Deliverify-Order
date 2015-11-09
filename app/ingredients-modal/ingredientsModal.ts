import {Page} from "ionic/ionic";
import {MenuData} from "../data/menu";

@Page({
    templateUrl: 'app/ingredients-modal/ingredients-modal.html'
})

export class IngredientsModal {
    constructor(service: MenuData) {
        this.service = service;
        this.ingredients = this.service.getIngredients();

    }

    getIngredients() {
        return this.service.getIngredients();
    }

    toggleIngredient(ingredient) {
        ingredient.Ordered = !ingredient.Ordered;
    }
}

