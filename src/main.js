import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import {MyApi} from "./api/MyApi";

Vue.config.productionTip = false
Vue.use(Antd)

//全局注册api接口
Vue.prototype.$api = MyApi
new Vue({
    render: h => h(App),
}).$mount('#app')
