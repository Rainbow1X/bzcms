import { Table,Popconfirm,Button} from 'antd';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
import { useState } from 'react';
import AddMenusModal from "./components/addMenusModal"
let center:AlignType ="center"
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '菜单名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '菜单图标',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    key: 'add_time',
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
    title:'头像',
    icon: '头像',
    add_time: '2021-3-12 14:46',
  },
 
];

function MenusList(){
  const [openAddModal,setOpenAddModal] = useState(false)
  const toggleModal=()=>{
    setOpenAddModal(!openAddModal)
  }
  const handelOk=()=>{

  }


    return(
      <div className="pageContent">
        <PageTitle title="菜单列表"/>
        <div className="pageMain">
          
          <Table
          rowKey={record=>(record.id)} 
           title={
              ()=>{
                return  <Button type="primary" onClick={()=>{toggleModal()}} >添加新菜单</Button>
              }
            }
            columns={columns} 
            dataSource={data} 
           />
        </div>
        <AddMenusModal isShow={openAddModal} title="添加新菜单" handelOk={handelOk}  handleCancel={()=>{toggleModal()}} />
      </div>
    );
}
export default MenusList