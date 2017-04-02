import AppApi from 'apijs'

export default {
    state: 'NOT_LOGGED',
    logged_user: null,
    init,
    authenticate,
};

function authenticate(username, password){
    if(this.state == 'LOGGED'){
        throw new Error('Already authenticated');
    }
    this.state = 'UNKNOWN';
    return AppApi.login(username, password).then(({data}) => {
        if(data){
            return this.init();
        } else {
            this.state = 'NOT_LOGGED';
        }
    });
}

function init(){
    if(window.APP && window.APP.logged_user){
        this.logged_user = window.APP.logged_user;
        this.state = 'LOGGED';
    } else {
        this.state = 'UNKNOWN';
        return AppApi.whoami().then(({data}) => {
            if(data.authenticated){
                this.logged_user = data.user;
                this.state = 'LOGGED';
            } else {
                this.logged_user = null;
                this.state = 'NOT_LOGGED';
            }
        });
    }
}
