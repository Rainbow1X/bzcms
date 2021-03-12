import { Layout, Menu ,Affix} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React,{useState} from "react"
import menus from "../../menus"
import UserMenus from "../../components/userMenus"
import {Route} from "react-router-dom"
import "./style.scss"
import routers from "../../routers"
import {Link} from "react-router-dom"
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
                        return  <Menu.Item key={sub.path}> <Link to={sub.path}>{sub.title} </Link></Menu.Item>
                      }))
                     }
                   </SubMenu>
                }else{
                     return <Menu.Item key={item.path} icon={<UserOutlined />}><Link to={item.path}>{item.title} </Link></Menu.Item>
                }
              })
            }
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Content>
            <Affix offsetTop={0.0001}>
              <Header className="site-layout-background" style={{ padding: 0,paddingRight:20}}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick:()=>{toggle(!collapsed)} ,
                })}
                <UserMenus/>
              </Header>
            </Affix>
            {
               routers[0].children?.map(item=>{
                 return <Route path={item.path} component={item.component} key={item.path}/>
               })
            }
            

          </Content>
        </Layout>

      </Layout>
  )
}

export default Home