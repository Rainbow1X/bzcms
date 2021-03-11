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
        path: "/user",
      },
      {
        title: "管理列表",
        path: "/user",
      },
    ],
  },
  {
    title: "资源管理",
    icon: "fa-user-o",
    children: [
      {
        title: "分类管理",
        path: "/user",
      },
      {
        title: "资源列表",
        path: "/user",
      },
    ],
  },
  {
    title: "系统设置",
    icon: "fa-user-o",
    children: [
      {
        title: "菜单设置",
        path: "/user",
      },
      {
        title: "轮播图设置",
        path: "/user",
      },
    ],
  },
];

export default menus;
