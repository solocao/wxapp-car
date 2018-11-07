import Vue from 'vue';
import App from '@/App';

import { post, get } from './api/index';

Vue.prototype.post = post;
Vue.prototype.get = get;

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
