import { extendObservable } from 'mobx';

// UserStore

class UserStore {
    constructor() {
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            username: ''

        })
    }
}

// Creating new instance of userstore that contains the data above
export default new UserStore();