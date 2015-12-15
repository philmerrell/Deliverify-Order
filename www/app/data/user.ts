/**
 * Created by philmerrell on 11/4/15.
 */

export class UserService {

    constructor() {
        this.currentUser = {
            Locations: []
        };
    }
    getCurrentUser() {
        return this.currentUser;
    }
    setCurrentUser(user) {

    }
}