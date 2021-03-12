import { Menu, Dropdown,Avatar} from 'antd';
import {
  UserOutlined,
  LoginOutlined
} from '@ant-design/icons';
const menu = (
  <Menu>
    <Menu.Item key="0" icon={<UserOutlined />} >
      个人信息
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" icon={<LoginOutlined />} >退出登录</Menu.Item>
  </Menu>
);
function UserMenus(){
  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
       <Avatar size={32} icon={<UserOutlined />} style={{cursor:"pointer"}} />
    </Dropdown>
  )
}
export default UserMenus