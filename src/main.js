import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import footer from './components/common/footer.vue'
import ibox_tools from './components/common/ibox_tools.vue'
import navigation from './components/common/navigation.vue'
import topnavbar from './components/common/topnavbar.vue'

Vue.use(VueRouter);
require('git ');

const router = new VueRouter({
    routes: [
        {
            path: '/', components: {
            footer: footer,
            ibox_tools: ibox_tools,
            navigation: navigation,
            topnavbar: topnavbar
        },
        }
    ]
});

new Vue({
    el: '#app',
    render: h => h(app),
    router,
});
