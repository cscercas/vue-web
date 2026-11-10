import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../pages/domus/Domus.vue";
import Batman from "../pages/batman/Batman.vue";
import Primus from "../pages/simpsons/Primus.vue";
import Responsum from "../pages/responsum/Responsum.vue";
import Layout from "@/pages/simpsons/Layout.vue";
import Circa from "@/pages/simpsons/Circa.vue";
import Collectione from "@/pages/simpsons/Collectione.vue";
import Character from "@/pages/simpsons/Character.vue";

export const router = createRouter({
history: createWebHashHistory(import.meta.env.BASE_URL),
routes: [
{
    path: "/",
    name: "home",
    component: Domus
}, 
{
    path: "/batman",
    name: "batman",
    component: Batman  
},
{
    path: "/simpsons",
    children: [
        {
            path: "",
             name: "simpsons",
            component: Primus
        },
        {
            path: "about",
            component: Layout,
            children: [
                {
                    path: "",
                    name: "simpsons-about",
                    component: Circa
                }
            ]
        },
        {
            path: "gallery",
            component: Layout,
            children: [
                {
                    path: "",
                    name: "simpsons-characters",
                    component: Collectione
                },
                {
                    path: ":id",
                    name: "simpsons character",
                    component: Character
                }
            ]
        },
    ]
},
{
    path: "/indecision",
    name: "indecision",
    component: Responsum
}, 
{
    path: '/:pathMatch(.*)*',
    redirect: '/',
}
]
})