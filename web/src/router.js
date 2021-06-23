import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import SensorList from "./views/Home/SensorList.vue";
import AddSensor from "./views/Home/AddSensor.vue";
import SimSensor from "./views/Home/SimSensor.vue";
import WarnLogs from "./views/Home/WarnLogs.vue";
import ControlLogs from "./views/Home/ControlLogs.vue";
import ControlSensor from "./views/Home/ControlSensor.vue";
import Login from "./views/Login/Login.vue";
import UserManagement from "./views/Home/UserManagement.vue";
import Registered from "./views/Login/Registered.vue";
import VisualSensor from './views/Home/VisualSensor.vue'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/registered", component: Registered },
    {
      path: "/home",
      name: "home",
      component: Home,
      redirect: "/sensorList",
      children: [
        {
          path: "/sensorList",
          component: SensorList,
        },
        {
          path: "/addSensor",
          component: AddSensor,
        },
        {
          path: "/simSensor",
          component: SimSensor,
        },
        {
          path: "/warnLogs",
          component: WarnLogs,
        },
        {
          path: "/controlLogs",
          component: ControlLogs,
        },
        {
          path: "/controlSensor",
          component: ControlSensor,
        },
        {
          path: "/UserManagement",
          component: UserManagement,
        },
        {
          path: "/VisualSensor",
          component: VisualSensor,
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") return next();
//   const username = window.sessionStorage.getItem("username");
//   // console.log(to.path);
//   if (!username) return next("/login");
//   // 登录成功（已获取到username）
//   next();
// });

export default router;
