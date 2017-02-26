import axios from 'axios';

export default {
    list_repos,
    list_issues,
};

function list_repos(u){
    return axios.get('https://api.github.com/users/'+u+'/repos');
}

function list_issues(u, r){
    return axios.get('https://api.github.com/repos/'+u+'/'+r+'/issues');
};
