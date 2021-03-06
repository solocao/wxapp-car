import Vue from 'vue';
import App from '@/App';
import store from '@/store';

import MpvueRouterPatch from 'mpvue-router-patch';
import { post, get } from './api/index';

Vue.prototype.post = post;
Vue.prototype.get = get;

Vue.prototype.$store = store;

Vue.use(MpvueRouterPatch);
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
