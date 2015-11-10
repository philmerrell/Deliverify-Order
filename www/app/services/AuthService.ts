/**
 * Created by philmerrell on 11/9/15.
 */
import {Injectable} from 'angular2/angular2';
import {UserService} from '../services/UserService';

@Injectable()
export class AuthService {
    firebaseUrl: string = 'https://philmerrell.firebaseio.com/';
    ref: Firebase;
    currentUser: any;
    userService: UserService;


    constructor(userService: UserService) {
        this.userService = userService;
        this.currentUser = userService.getCurrentUser();
        //this.firebaseUrl = 'https://philmerrell.firebaseio.com/';
        this.ref = new Firebase(this.firebaseUrl);
        this.ref.onAuth((user) => {
            console.log(user);
            if(user) {
                this.ref.child("users").child(user.uid).set({
                    provider: user.provider,
                    name: this.getName(user)
                });
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

    getName(user) {
        switch(user.provider) {
            case 'github':
                return user.github.displayName;
        }
    }

}
