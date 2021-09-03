import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Shop from "@/views/Shop.vue";
import Cards from "@/views/Cards.vue";
import CardDetails from "@/views/CardDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/shop/:id",
    name: "Cards",
    props: true,
    component: Cards,
  },
  {
    path: "/card/:id",
    name: "CardDetails",
    props: true,
    component: CardDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
