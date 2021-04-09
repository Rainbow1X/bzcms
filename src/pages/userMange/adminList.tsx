import { Table,Popconfirm,Button,Avatar,message} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
import { useState,useEffect,useContext} from 'react';
import AddAdminModal from "./components/addAdminModal"
import {getAdminListApi,addAdminApi,deleteAdminApi,changeAdminApi} from "../../utils/function"
import {AdminUserModels} from "../../models/models"
import {AdminProvide,AdminContext} from "../../store/adminContext"
import apiUrl from "../../utils/apiUrl"
import "./style.scss"
import moment from '_moment@2.29.1@moment';
let center:AlignType ="center"




function AdminList(){
  const [openAddModal,setOpenAddModal] = useState<boolean>(false)
  const [actionType,setActionType] = useState<string>('TYPE_NEW') //TYPE_NEW 是新增 TYPE_MODIFY 是修改
  const [adminList,setAdminList] = useState([])
  const {state,dispatch}= useContext(AdminContext) as {state:any,dispatch:Function}
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
        return <Avatar icon={<UserOutlined />} />
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
    render:(text:string)=>{
      return moment(text).format("YYYY-MM-DD hh:mm:ss")
    }
  },
  {
    title: '登录时间',
    dataIndex: 'login_time',
    key: 'login_time',
    render:(text:string)=>{
      if(text==="0001-01-01T00:00:00Z"){
        return "未登录"
      }
      return moment(text).format("YYYY-MM-DD hh:mm:ss")
    }
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    width: 200,
    align:center,
    render:(text:string, record:any,index:number)=>{
      return(
        <div className="actionWrapper">
            <span onClick={
                () => {changeAdmin(index)}
            } > 修改 </span>
            <Popconfirm title="你确定要删除该分组吗？"
                okText="确定"
                cancelText="取消"
                onConfirm={
                    () => {
                      deleteAdmin(index)
                    }
                }>
                
                <span> 删除 </span>
            </Popconfirm >
        </div>
      )
    }
  }
];



  const toggleModal=()=>{

    if (openAddModal===true) {   //当窗口关闭时 清楚reducer当前需要修改数据
      dispatch({type:"SET_EDIT_ADMIN",payload:{}})
    }

    setOpenAddModal(!openAddModal)
  }

  useEffect(()=>{
    // 需要在 componentDidMount 执行的内容
    getAdminList()
  }, [])


  //弹窗 添加管理员的处理
  const handelOk=(data:AdminUserModels):void=>{
    if (actionType==="NEW"){
      addAdminApi(data,(res:any)=>{
        message.success(res.msg)
        getAdminList()
        toggleModal()
      })
    }else{
      data['id'] = state.curAdmin.id
      changeAdminApi(data,(res:any)=>{
        message.success(res.msg)
        getAdminList()
        toggleModal()
      })
    }
    
  }

  //获取管理列表
  const getAdminList=():void=>{
    getAdminListApi((res:any):void=>{
      setAdminList(res.data)
    })
  }

  //删除指定管理员
  const deleteAdmin=(index:number):void=>{
      let newlist= [...adminList]
    deleteAdminApi(newlist[index]['id'],(res:any)=>{
      message.success(res.msg)
      newlist.splice(index,1)
      setAdminList(newlist)
    })
  }

  const newAdmin=():void=>{
    setActionType("NEW")
    toggleModal()
  }

  
  //修改admin用户信息
  const changeAdmin=(index:number):void=>{
    let curAdmin=adminList[index]
    dispatch({type:"SET_EDIT_ADMIN",payload:curAdmin})
    setActionType("TYPE_MODIFY")
    toggleModal()
  }


    return(
      <div className="pageContent">
        <PageTitle title="管理列表"/>
       
          <div className="pageMain">
            <Table
              rowKey={record=>(record.id)} 
              title={
                  ()=>{
                    return  <Button type="primary" onClick={newAdmin} >添加新管理</Button>
                  }
                }
              columns={columns}
              dataSource={adminList} 
              pagination={false}
            />
          </div>

          <AddAdminModal type={actionType} isShow={openAddModal} title="添加新管理" handelOk={handelOk}  handleCancel={()=>{toggleModal()}}  />

      </div>
    );
}
const Provide=()=>(
  <AdminProvide>
    <AdminList/>
  </AdminProvide>
)
export default Provide

