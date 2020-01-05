import '@babel/polyfill'
import Vue from 'vue' ;
import App from './App';


Vue.config.productionTip = false
new Vue({
    el: '#root',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$globalEventBus = this
    },
})