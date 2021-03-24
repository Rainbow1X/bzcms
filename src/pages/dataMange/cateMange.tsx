import { Table,Popconfirm, Switch, Button} from 'antd';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
import AddCateModal from "./components/addCateModal"
import {useState} from "react"
let center:AlignType ="center"
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
    dataIndex: 'icon',
    key: 'ico',
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
    icon: '表情',
    state:1,
    children: [
      {
        id: 11,
        title: 'QQ表情',
        state: 1,
        icon: 'QQ表情',
      },
      {
        id: 12,
        title: '微信表情',
        state: 0,
        icon: '微信表情'
      }
    ],
  },
  {
    id: 2,
    title: '壁纸',
    state: 1,
    icon: '壁纸',
    children: [
      {
        id: 11,
        title: '动物',
        state: 1,
        icon: '动物',
      },
      {
        id: 12,
        title: '明星',
        state: 0,
        icon: '明显'
      }
    ],
  },
  {
    id: 2,
    title: '专辑',
    state: 1,
    icon: '专辑',
    children: [
      {
        id: 11,
        title: '动画专辑',
        state: 1,
        icon: '动画专辑',
      },
      {
        id: 12,
        title: '游戏专辑',
        state: 0,
        icon: '游戏专辑'
      }
    ],
  },
];


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
          <Table
            title={()=><Button type="primary" onClick={toggleModal} >添加分类</Button>}
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