import { createRouter , createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import RepoFetchVue from "@/components/RepoFetch.vue";
import NotFound from "@/components/NotFound.vue";


const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/myrepos",
        component: RepoFetchVue,
    },
    {
        path: "/:catchAll(.*)", // wildcard to catch all path errors
        name: "NotFound",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL)
})

export default router