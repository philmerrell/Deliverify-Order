/**
 * Created by philmerrell on 11/9/15.
 */
import {Injectable} from 'angular2/angular2';
import {UserService} from '../services/UserService';

@Injectable()
export class AuthService {
    firebaseUrl: string;
    ref: Firebase;
    currentUser: any;
    userService: UserService;


    constructor(userService: UserService) {
        this.userService = userService;
        this.currentUser = userService.getCurrentUser();
        this.firebaseUrl = 'https://philmerrell.firebaseio.com/';
        this.ref = new Firebase(this.firebaseUrl);
        this.ref.onAuth((user) => {
            if(user) {
                console.log('User: ', user);
                this.userService.setCurrentUser(user);
            }
        });

    }

    authWithGithub() {
        this.ref.authWithOAuthPopup("github", (error, authData) => {
            if(error) {
                console.log('Uh, what had happened was: ', error);
            }
        }, {
           scope: 'user:email'
        });

    }
}
