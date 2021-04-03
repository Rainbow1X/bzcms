import Home from "./pages/home/home";
import Login from "./pages/login/login";
import MemberList from "./pages/userMange/memberList";
import AdminList from "./pages/userMange/adminList";
import CateMange from "./pages/dataMange/cateMange";
import DataList from "./pages/dataMange/dataList";
import MenusList from "./pages/setting/menus";
import BannerList from "./pages/setting/banner";
import SectorMange from './pages/dataMange/sectorMange';
const routers = [
  {
    path: "/home",
    component: Home,
    exac: false,
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
      {
        path: "/home/dataList",
        component: DataList,
      },
      {
        path: "/home/menusList",
        component: MenusList,
      },
      {
        path: "/home/banner",
        component: BannerList,
      },
      {
        path: "/home/sector",
        component: SectorMange,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];
export default routers;
