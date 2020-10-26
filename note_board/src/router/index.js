import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import User from "../components/User";
import UserDetail from "../components/UserDetail";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/index', name: 'Index', component: Index},
        {path: '/user', name: 'User', component: User},
        {path: '/userDetail/:username', name: 'UserDetail', component: UserDetail},
        {path: '/', name: 'Home', redirect: '/index'},
    ]
})
