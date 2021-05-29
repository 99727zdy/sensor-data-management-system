import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import SensorList from "./views/Home/SensorList.vue";
import AddSensor from "./views/Home/AddSensor.vue";
import ControlSensor from "./views/Home/ControlSensor.vue";
import WarnLogs from "./views/Home/WarnLogs.vue";
import ControlLogs from "./views/Home/ControlLogs.vue";
import ConSensorI from "./views/Home/ConSensorI.vue";
import Login from "./views/Login/Login.vue";
import UserManagement from "./views/Home/UserManagement.vue";
import Registered from "./views/Login/Registered.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // { path: '/', redirect: '/login' },
    { path: "/login", component: Login },
    { path: "/registered", component: Registered },
    {
      path: "/",
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
          path: "controlSensor",
          component: ControlSensor,
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
          path: "/conSensorI",
          component: ConSensorI,
        },
        {
          path: "/UserManagement",
          component: UserManagement,
        },
      ],
    },
  ],
});
