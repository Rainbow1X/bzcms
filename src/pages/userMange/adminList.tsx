import { Table,Popconfirm,Button,Avatar,message} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
import { useState,useEffect} from 'react';
import AddAdminModal from "./components/addAdminModal"
import {getAdminList,addAdmin} from "../../utils/function"
import {AdminUserModels} from "../../models/models"
import apiUrl from "../../utils/apiUrl"
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
    render:(text:string)=>{
      if(text){
        return <Avatar src={apiUrl.imgPath+text} />
      }else{
        <Avatar icon={<UserOutlined />} />
      } 
    }
  },
  {
    title: '名称',
    dataIndex: 'nickname',
    key: 'nickname',
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



function AdminList(){
  const [openAddModal,setOpenAddModal] = useState(false)
  const [adminList,setAdminList] = useState([])



  const toggleModal=()=>{
    setOpenAddModal(!openAddModal)
  }

  useEffect(()=>{
    // 需要在 componentDidMount 执行的内容
    getAdminList((res:any):void=>{
      console.log(res)
      setAdminList(res.data)
    })
  }, [])


  const handelOk=(data:AdminUserModels):void=>{
    addAdmin(data,(res:any)=>{
      message.success(res.msg)
      toggleModal()
      
    })
    
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
            dataSource={adminList} 
           />
        </div>

        <AddAdminModal isShow={openAddModal} title="添加新管理" handelOk={handelOk}  handleCancel={()=>{toggleModal()}}  />
      </div>
    );
}
export default AdminList

