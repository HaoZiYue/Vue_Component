import Vue from 'vue' ;
import App from './App';
import './base.css';


Vue.config.productionTip = false
new Vue({
    el: '#root',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$globalEventBus = this
    }
})