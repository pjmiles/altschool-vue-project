import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import RepoFetch from "@/components/RepoFetch.vue";
import RepoDetails from "@/components/RepoDetails.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/repofetch",
        component: RepoFetch,
    },
    {
        path: "/repofetch/repo/:id",
        name: "repoDetails",
        component: RepoDetails,
    },
    {
        path: "/:catchAll(.*)", // wildcard to catch all path errors
        component: NotFound,
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
export default router