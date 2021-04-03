import { Table,Popconfirm} from 'antd';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
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
    title: '状态',
    dataIndex: 'state',
    key: 'state',
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
            <Popconfirm title="你确定要删除该管理吗？"
                okText="确定"
                cancelText="取消"
                onConfirm={
                    () => {}
                }>
                <span> 拉黑 </span>
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
    state:1,
    reg_time: '2021-3-12 14:46',
    login_time: '2021-3-12 14:46'
  },
 
];

function MemberList(){
    return(
      <div className="pageContent">
        <PageTitle title="用户列表"/>
        <div className="pageMain">
          
          <Table
            rowKey={record=>(record.id)} 
            columns={columns} 
            dataSource={data} 
          />
        </div>
      </div>
    );
}
export default MemberList