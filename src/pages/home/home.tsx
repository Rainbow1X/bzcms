import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React,{useState} from "react"
import menus from "../../menus"
import "./style.scss"
const { SubMenu } = Menu;
const { Header, Sider, Content} = Layout;


function Home(){
  const [collapsed,toggle] = useState(false)

  return (
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[menus[0].path||"/"]}>

            {
              menus.map((item,index)=>{
                if(item.children){
                   return <SubMenu key={"subMenu"+index} icon={<UserOutlined />} title={item.title}>
                     {
                      item.children.map((sub=>{
                        return  <Menu.Item key={sub.path}>{sub.title}</Menu.Item>
                      }))
                     }
                   </SubMenu>
                }else{
                     return <Menu.Item key={item.path} icon={<UserOutlined />}>{item.title}</Menu.Item>
                }
              })
            }
          </Menu>
        </Sider>

        <Layout className="site-layout">

          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick:()=>{toggle(!collapsed)} ,
            })}
            
            
            
          </Header>

          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>

      </Layout>
  )
}

export default Home