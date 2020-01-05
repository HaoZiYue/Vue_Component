import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News.vue';
import Message from '../pages/Message.vue'
import MessageDtail from '../pages/MessageDetail.vue'
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/news',
                    component:News
                },
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            path:'/home/message/detail/:mid',
                            component:MessageDtail                            
                        }
                    ]
                }
            ]
        },
        //路径为/则转到/about下
        {
            path:'/',
            redirect:'/about'
        }
    ]
})
