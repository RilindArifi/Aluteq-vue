import { createRouter, createWebHistory } from 'vue-router';
import LayoutsDefault from './components/LayoutsDefault.vue'
import Home from './views/Home.vue'
import Entrances from './views/Entrances.vue'
import DecorativePanels from './views/DecorativePanels.vue'
import Contactus from './views/Contactus.vue'

const routes = [
    {
        path: '/',
        component: LayoutsDefault,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/entrances',
                name: 'entrances',
                component: Entrances,
            },
            {
                path: '/decorative_panels',
                name: 'decorative_panels',
                component: DecorativePanels,
            },
            {
                path: '/contactus',
                name: 'contactus',
                component: Contactus,
            },
        ]
    },
]




const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;