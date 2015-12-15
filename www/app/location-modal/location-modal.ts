import {Page} from "ionic/ionic";
import {MenuData} from "../data/menu";
import {UserService} from "../services/UserService";

@Page({
    templateUrl: 'app/location-modal/location-modal.html'
})

export class LocationModal {
    constructor(userService: UserService) {
        //this.address = {
        //    Street1: '111 N. 11th St.',
        //    City: 'Boise',
        //    State: 'ID',
        //    Zip: '83706'
        //};
        this.address = {};

        this.userService = userService;
    }

    addLocation() {
        this.close();
        console.log(this.address);
        this.userService.addLocationToUser(this.address);
    }

}