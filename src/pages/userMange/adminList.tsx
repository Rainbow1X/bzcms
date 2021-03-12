import { Table,Popconfirm,Button} from 'antd';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
import { useState } from 'react';
import AddAdminModal from "./components/addAdminModal"
import "./style.scss"
let center:AlignType ="center"
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '注册时间',
    dataIndex: 'reg_time',
    key: 'reg_time',
  },
  {
    title: '登录时间',
    dataIndex: 'login_time',
    key: 'login_time',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    width: 200,
    align:center,
    render:(text:string, record:any)=>{
      return(
        <div className="actionWrapper">
            <span onClick={
                () => {}
            } > 修改 </span>
            <Popconfirm title="你确定要删除该分组吗？"
                okText="确定"
                cancelText="取消"
                onConfirm={
                    () => {}
                }>
                <span> 删除 </span>
            </Popconfirm >
        </div>
      )
    }
  }
];

const data = [
  {
    id: 1,
    avatar:'头像',
    username: 'John',
    email:'87624931@qq.com',
    reg_time: '2021-3-12 14:46',
    login_time: '2021-3-12 14:46'
  },
 
];

function AdminList(){
  const [openAddModal,setOpenAddModal] = useState(false)
  const toggleModal=()=>{
    setOpenAddModal(!openAddModal)
  }
  const handelOk=()=>{

  }


    return(
      <div className="pageContent">
        <PageTitle title="管理列表"/>
        <div className="pageMain">
          
          <Table
          rowKey={record=>(record.id)} 
           title={
              ()=>{
                return  <Button type="primary" onClick={()=>{toggleModal()}} >添加新管理</Button>
              }
            }
            columns={columns} 
            dataSource={data} 
           />
        </div>

        <AddAdminModal isShow={openAddModal} title="添加新管理" handelOk={handelOk}  handleCancel={()=>{toggleModal()}}  />
      </div>
    );
}
export default AdminList