export default {
    list_repos: _mockasync(list_repos),
    list_issues: _mockasync(list_issues),
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

function _mockasync(f){
    function mocked(){
        var res = f(arguments);
        return new Promise(function(resolve, reject){
            window.setTimeout(function(){
                resolve({data: res});
            }, 600);
        });
    }
    return mocked;
}
