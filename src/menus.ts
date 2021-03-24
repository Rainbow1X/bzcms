const menus = [
  {
    title: "控制面板",
    icon: "fa-user-o",
    path: "/",
  },
  {
    title: "用户管理",
    icon: "fa-user-o",
    children: [
      {
        title: "用户列表",
        path: "/home/memberList",
      },
      {
        title: "管理列表",
        path: "/home/adminList",
      },
    ],
  },
  {
    title: "资源管理",
    icon: "fa-user-o",
    children: [
      {
        title: "分类管理",
        path: "/home/cate",
      },
      {
        title: "资源列表",
        path: "/home/dataList",
      },
    ],
  },
  {
    title: "系统设置",
    icon: "fa-user-o",
    children: [
      {
        title: "菜单设置",
        path: "/home/menusList",
      },
      {
        title: "轮播图设置",
        path: "/home/banner",
      },
    ],
  },
];

export default menus;
