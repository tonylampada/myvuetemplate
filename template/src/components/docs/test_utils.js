import Vue from 'vue';

export default {
    create_component,
};

function create_component(C){
    var Ctor = Vue.extend(C);
    var c = new Ctor();
    return c;
}
