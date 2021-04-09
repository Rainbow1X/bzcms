import { Modal,Input,Form,Upload,Avatar,Spin,message} from 'antd';
import React,{useState,useEffect,useContext}from "react"
import {UserOutlined} from '@ant-design/icons';
import {AdminUserModels} from "../../../models/models"
import apiurl from '../../../utils/apiUrl';

import {AdminContext} from "../../../store/adminContext"

interface propsType{
  isShow:boolean|undefined,
  handelOk:(res: AdminUserModels) => void,
  handleCancel:() => void,
  title:string,
  type:string
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};


const AddAdminModal:React.FC<propsType>=(props)=>{
  const {isShow,handelOk,handleCancel,title,type}=props 
  const [form] = Form.useForm()
  const [imageUrl,setImageUrl] = useState('')

  const {state}= useContext(AdminContext) as {state:any}

  const [loading,setLoading] = useState(false)

  const checkData=async ()=>{
      const values = await form.validateFields();
      values.avatar = imageUrl
      handelOk(values)
  }

  useEffect(()=>{
    if(isShow===false){
      form.resetFields()
      setImageUrl('')
      setLoading(false)
    }else{
      if(type==="TYPE_MODIFY"){
        let params:any = {...state.curAdmin}
        setImageUrl(params['avatar'])
        delete params['avatar']
        form.setFieldsValue(params)
      }
    }
    
  },[isShow,form,type,state.curAdmin])

  //处理图片上传
  const handleUploadImg = (res:any)=>{
     let params = res.file
    if (params.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (params.status === 'done') {
      setLoading(false)
     message.success(params.response.msg)
     setImageUrl(params.response.data)
    }
  }

  

  return(
    <Modal title={title} okText={type==="NEW"?"添加":"修改"} cancelText="取消" visible={isShow} onOk={checkData} onCancel={handleCancel} forceRender={true}>
      
        <Form {...layout} name="nest-messages" form={form}  >
          <Form.Item name='username' label="用户名" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='password' label="密码" rules={[{ min:6,max:16,required:type==="NEW"}]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name='nickname' label="名称" rules={[{required: true,min:2,max:16,}]}>
            <Input />
          </Form.Item>
          <Form.Item name='email' label="邮箱" rules={[{ type: 'email'}]}>
            <Input />
          </Form.Item>
          <Form.Item 
          name='avatar' 
          label="头像"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          >
           <Upload name="img" onChange={handleUploadImg} action={apiurl.apiUrl+apiurl.uploadApi} showUploadList={false} >
              <div style={{cursor:'pointer'}}>
                {
                  loading ? <Avatar size={64} icon={<Spin />}/>:imageUrl?<Avatar size={64} src={apiurl.imgPath+imageUrl}/> : <Avatar size={64} icon={<UserOutlined />}/> 
                }
              </div>
          </Upload>
          </Form.Item>
        </Form>
    </Modal>
  );
}
export default AddAdminModal