import Vue from 'vue'
import App from './App'
import { requestPost } from './common/js/api.js' // 挂载到原型上
Vue.prototype.$requestPost = requestPost
Vue.config.productionTip = false
import router from './router'
import Router, {RouterMount} from './js_sdk/hhyang-uni-simple-router/index.js';
App.mpType = 'app'





const app = new Vue({
	...App
})
// #ifdef H5
	RouterMount(app,'#app');
// #endif
// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
