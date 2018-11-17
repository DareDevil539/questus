import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Post from "./views/Post";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/blog",
      component: Blog
    },
    {
      path: "/post/:id",
      name: "post",
      component: Post
    }
  ]
});
