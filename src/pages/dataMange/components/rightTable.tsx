import { Table,Popconfirm} from 'antd';
import {AlignType} from 'rc-table/lib/interface'


let center:AlignType ="center"
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '图片',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: '封面',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '标题',
    dataIndex: 'email',
    key: 'email',
    width: 200,
  },
  {
    title: '发布时间',
    dataIndex: 'login_time',
    key: 'login_time',
    width: 200,
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

function RightTable(){
    return(
        <div className="">
          
          <Table
            rowKey={record=>(record.id)} 
            columns={columns} 
            dataSource={data} 
           />
        </div>

    );
}
export default RightTable