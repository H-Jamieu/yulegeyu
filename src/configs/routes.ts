import { RouteRecordRaw } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";
import GamePage from "../pages/GamePage.vue";
import GamePage_desk from "../pages/GamePage_desk.vue";

export default [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/game",
    component: GamePage,
  },
  {
    path: "/config",
    component: GamePage_desk,
  },
] as RouteRecordRaw[];
