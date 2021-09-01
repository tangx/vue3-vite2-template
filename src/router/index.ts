import { createRouter, createWebHistory } from "vue-router";

// 第 1 种导入 vue 的方式
import Hello from '@/components/Hello.vue'


const routes = [
    {
        path: "/hello",
        name: "Hello",
        // 第 1 种导入 vue 的方式
        component: Hello
    },
    {
        path: "/world",
        name: "World",

        // 第 1 种导入 vue 的方式
        component: () => import('@/components/World.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})


export default router