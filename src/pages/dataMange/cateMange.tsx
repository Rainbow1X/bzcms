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
    title: '分类图标',
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
    title: 'John Brown sr.',
    icon: 'New York No. 1 Lake Park',
    state:1,
    children: [
      {
        id: 11,
        title: 'John Brown',
        state: 1,
        icon: 'New York No. 2 Lake Park',
      },
      {
        id: 12,
        title: 'John Brown jr.',
        state: 0,
        icon: 'New York No. 3 Lake Park',
        children: [
          {
            id: 121,
            title: 'Jimmy Brown',
            state: 1,
            icon: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        id: 13,
        title: 'Jim Green sr.',
        state: 0,
        icon: 'London No. 1 Lake Park',
        children: [
          {
            id: 131,
           title: 'Jim Green',
            state: 0,
            icon: 'London No. 2 Lake Park',
            children: [
              {
                id: 1311,
               title: 'Jim Green jr.',
                state: 1,
               icon: 'London No. 3 Lake Park',
              },
              {
                id: 1312,
               title: 'Jimmy Green sr.',
                state: 0,
                icon: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Joe Black',
    state: 1,
    icon: 'Sidney No. 1 Lake Park',
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