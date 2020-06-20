/* 
 * 第三方路由
 */
import Vue from 'vue';
import Router from '../js_sdk/hhyang-uni-simple-router/index.js';
Vue.use(Router);
import modules from './modules/routerArray.js'
import {
	getStorageGlobal
} from '@/common/js/global.js'
const router = new Router({
	APP: {
		holdTabbar: true // 是否让原生tabBar做拦截
	},
	routes: [ // 路由表
		...modules
	]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	var isLogin;
	try {
		isLogin = Boolean(to.meta.isLogin);
	} catch (err) { // 如果没有这个字段，则捕获错误
		isLogin = false;
	}
	if (isLogin && !getStorageGlobal('user_info').uid) {
		next({
			path: '/pages/login/register'
		});
	}
	next();
});

export default router;
