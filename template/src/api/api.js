import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    login: login,
    whoami: whoami,
    list_repos,
    list_issues,
};

function login(username, password){
    return post('/api/login', {username: username, password: password});
}

function whoami(){
    return get('/api/whoami');
}

function list_repos(u){
    return get('https://api.github.com/users/'+u+'/repos');
}

function list_issues(u, r){
    return get('https://api.github.com/repos/'+u+'/'+r+'/issues');
};

function get(url, params){
    return axios.get(url, params)
}

function post(url, params){
    var fd = new FormData();
    Object.keys(params).map((k) => {
        fd.append(k, params[k]);
    })
    return axios.post(url, fd);
}