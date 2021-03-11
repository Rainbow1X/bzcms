import Home from "./pages/home/home";
import Login from "./pages/login/login";
const routers = [
  {
    ptah: "/",
    component: Home,
    exac: true,
  },
  {
    ptah: "/login",
    component: Login,
    exac: true,
  },
];
export default routers;
