import { Table,Popconfirm, Switch, Button,Tabs} from 'antd';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
import AddCateModal from "./components/addCateModal"
import {useState} from "react"
import "./style.scss"
let center:AlignType ="center"
const { TabPane } = Tabs;
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align:center,
  },
  {
    title: '分类名称',
    dataIndex: 'title',
    key: 'title',
    align:center,
  },
  {
    title: '封面',
    dataIndex: 'cover',
    key: 'cover',
    align:center,
  },
  {
    title: '是否为专辑',
    dataIndex: 'album',
    key: 'album',
    align:center,
  },
  {
    title: '承载页面',
    dataIndex: 'page',
    key: 'page',
    align:center,
  },

  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    align:center,
    render:(state:Number)=>{
      return <Switch checked={Boolean(state)}/>
    }
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
            <span onClick={
                () => {}
            } > 设置为专辑 </span>
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
  },

];

const data = [
  {
    id: 1,
    title: '表情',
    cover: '表情',
    state:1,
  },
  {
    id: 11,
    title: 'QQ表情',
    state: 1,
    cover: 'QQ表情',
  },
  {
    id: 12,
    title: '微信表情',
    state: 0,
    cover: '微信表情'
  }
];

const tabs = ["头像","表情","壁纸","专辑壁纸","聊天背景"]


function CateMange() {
  const [showModal,setShowModal] = useState(false)
  const toggleModal=()=>{
    setShowModal(!showModal)
  }
  const handelOk=()=>{
    
  }
  
  return (
    <div className="pageContent">
        <PageTitle title="资源分类管理"/>

        <div className="pageMain">
          <div className="addBtn"><Button type="primary" onClick={toggleModal} >添加分类</Button></div>
          <div>
            <Tabs defaultActiveKey="1">
              {tabs.map((item,index) => (
                <TabPane tab={item} key={index} ></TabPane>
              ))}
            </Tabs>
          </div>
          <Table
            rowKey={(record)=>record.id}
            columns={columns}
            dataSource={data}
          />
        </div>
        <AddCateModal title="添加分类" isShow={showModal} handleCancel={()=>{toggleModal()}} handelOk={()=>{handelOk()}} />
      </div>
    
      
      
  
  );
}

export default CateMange