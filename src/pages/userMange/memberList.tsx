import { Table,Popconfirm,message,Tag,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PageTitle from "../../components/pageTitle"
import {AlignType} from 'rc-table/lib/interface'
import {useEffect,useState} from "react"
import {MemberUserModels} from "../../models/models"
import {getMemberListApi,pullBlackMemberApi} from "../../utils/function"
import apiUrl from "../../utils/apiUrl"
import moment from '_moment@2.29.1@moment';


let center:AlignType ="center"

function MemberList(){
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
    title: 'OPENID',
    dataIndex: 'openid',
    key: 'openid',
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
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    render:(state:number)=>{
      return state===0?<Tag color="#f50">拉黑</Tag>:<Tag color="#108ee9">正常</Tag>
    }
  },
  {
    title: '操作',
    dataIndex: '',
    key: 'action',
    width: 200,
    align:center,
    render:(text:string, record:any,index:number)=>{
      return(
        <div className="actionWrapper">
          {
            record.state===1?
                <Popconfirm title="你确定要删除该管理吗？"
                    okText="确定"
                    cancelText="取消"
                    onConfirm={
                        () => {
                          pullBlackMember(index)
                        }
                    }>
                    <span> 拉黑 </span>
                </Popconfirm >
            :
                <span onClick={() => {pullBlackMember(index)}}>恢复</span>
          }
            
            
        </div>
      )
    }
  }
];
  const [memberList,setMemberList] = useState<MemberUserModels[] | []>([])


  useEffect(()=>{
    getMemberListApi((res:any)=>{
      setMemberList(res.data)
    })
  },[])

  //拉黑会员
  const pullBlackMember=(index:number)=>{
    let {id,state}:{id:number,state:number}= memberList[index]
      state = Number(!Boolean(state))
      pullBlackMemberApi(id,state,(res:any)=>{
        message.success(res.msg)
    })
  }


    return(
      <div className="pageContent">
        <PageTitle title="用户列表"/>
        <div className="pageMain">
          <Table
            rowKey={record=>(record.id)} 
            columns={columns} 
            dataSource={memberList} 
          />
        </div>
      </div>
    );
}
export default MemberList