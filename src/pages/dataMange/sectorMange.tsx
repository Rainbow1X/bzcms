import { Table,Popconfirm,Button} from 'antd';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
import { useState } from 'react';
import AddSectorModal from './components/addSectorModal';
import "./style.scss"

let center:AlignType ="center"
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '板块名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '装载页面',
    dataIndex: 'page',
    key: 'page',
  },
  {
    title: '是否为专辑',
    dataIndex: 'album',
    key: 'album',
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
    name:'头像',
    username: 'John',
    page:0,
    album: 1
  },
 
];

function SectorMange(){
  const [openAddModal,setOpenAddModal] = useState(false)
  const toggleModal=()=>{
    setOpenAddModal(!openAddModal)
  }
  const handelOk=()=>{

  }


    return(
      <div className="pageContent">
        <PageTitle title="板块分类管理"/>
        <div className="pageMain">
          
          <Table
          rowKey={record=>(record.id)} 
           title={
              ()=>{
                return  <Button type="primary" onClick={()=>{toggleModal()}} >添加板块分类</Button>
              }
            }
            columns={columns} 
            dataSource={data} 
           />
        </div>

        <AddSectorModal isShow={openAddModal} title="添加板块分类" handelOk={handelOk}  handleCancel={()=>{toggleModal()}}  />
      </div>
    );
}
export default SectorMange