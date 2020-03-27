import Vue from 'vue';
import VueRouter from 'vue-router';

import FirstMenu from '../components/FirstMenu.vue';
import SecondMenu from '../components/SecondMenu.vue';
import Details from '../components/Details.vue';
import Buy from '../components/Buy.vue';
import ForFun from '../components/ForFun.vue';
import Empty from '../components/EmptyRouterComponent.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/first-route',
        component: Empty,
        children: [
            {
                path: 'first',
                component: FirstMenu,
                children:[
                    {
                        path: 'details',
                        component: Details
                    },
                    {
                        path: 'buy',
                        component: Buy
                    }
                ]
            },
            {
                path: 'second',
                component: SecondMenu,
                children: [
                    {
                        path: 'forfun',
                        component: ForFun
                    }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});



export default router;