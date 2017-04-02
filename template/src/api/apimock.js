var logged_user = null;

export default {
    list_repos: _mockasync(list_repos),
    list_issues: _mockasync(list_issues),
    login: _mockasync(login),
    whoami: _mockasync(whoami),
};

function list_repos(u){
    return [
        {
            name: 'angularjs',
            owner: {login: 'ze'},
        }, 
        {
            name: 'vuejs',
            owner: {login: 'ze'},
        },
        {
            name: 'react',
            owner: {login: 'ze'},
        }
    ];
}

function list_issues(u, r){
    return [
        {
            number: 313,
            title: 'Construir a maquina do tempo',
        },
        {
            number: 312,
            title: 'Voltar no passado e impedir a 2a guerra mundial',
        },
    ];
};

function login(username, password){
    if(password){
        logged_user = {
            username: username,
            name: username,
            permissions:{
                ADMIN: false,
                STAFF: false,
            }
        };
    }
    return logged_user;
}

function whoami(){
    return logged_user ? {
        authenticated: true,
        user: logged_user,
    } : {authenticated: false};
}

function _mockasync(f){
    function mocked(){
        var res = f.apply(this, arguments);
        return new Promise(function(resolve, reject){
            window.setTimeout(function(){
                resolve({data: res});
            }, 600);
        });
    }
    return mocked;
}
