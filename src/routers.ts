import Home from "./pages/home/home";
import Login from "./pages/login/login";
import MemberList from "./pages/userMange/memberList";
import AdminList from "./pages/userMange/adminList";
import CateMange from "./pages/dataMange/cateMange";
const routers = [
  {
    path: "/home",
    component: Home,
    exac: true,
    children: [
      {
        path: "/home/memberList",
        component: MemberList,
      },
      {
        path: "/home/adminList",
        component: AdminList,
      },
      {
        path: "/home/cate",
        component: CateMange,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];
export default routers;
