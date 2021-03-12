import { Modal,Input,Form,Upload,Avatar} from 'antd';
import React from "react"
import {UserOutlined} from '@ant-design/icons';
interface propsType{
  isShow:boolean|undefined,
  handelOk:() => void,
  handleCancel:() => void,
  title:string
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label}必须填写',
  types: {
    email: '请输入正确的${label}!',
  },
  number: {
    range: '${label}长度必须大于 ${min} 小于 ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AddAdminModal:React.FC<propsType>=(props)=>{
  const {isShow,handelOk,handleCancel,title}=props 
  const onFinish = (values: any) => {
    console.log(values);
  };
  return(
    <Modal title={title} okText="添加" cancelText="取消" visible={isShow} onOk={handelOk} onCancel={handleCancel}>
      
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name='username' label="用户名" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='password' label="密码" rules={[{ min:6,max:16,required: true}]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name='email' label="邮箱" rules={[{ type: 'email'}]}>
            <Input />
          </Form.Item>
          <Form.Item 
          name='avatar' 
          label="头像"
          valuePropName="fileList"
          >
           <Upload name="logo" action="/upload.do" listType="picture">
              <div>
                {/* <img src="" alt="" srcset=""/> */}
                <Avatar size={64} icon={<UserOutlined />} />
              </div>
          </Upload>
          </Form.Item>
        </Form>
    </Modal>
  );
}
export default AddAdminModal