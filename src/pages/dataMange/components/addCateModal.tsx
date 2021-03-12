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

const AddCateModal:React.FC<propsType>=(props)=>{
  const {isShow,handelOk,handleCancel,title}=props 
  const onFinish = (values: any) => {
    console.log(values);
  };
  return(
    <Modal title={title} okText="添加" cancelText="取消" visible={isShow} onOk={handelOk} onCancel={handleCancel}>
      
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

          <Form.Item name='username' label="上级分类" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name='username' label="分类名称" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name='username' label="状态" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
    
          <Form.Item 
          name='icon' 
          label="分类图标"
          >
           <Upload name="logo" action="/upload.do" listType="picture">
              <div>
                {/* <img src="" alt="" srcset=""/> */}
                <Avatar size={64} icon={<UserOutlined />} />
              </div>
          </Upload>
          </Form.Item>

          <Form.Item 
          name='cover' 
          label="封面图"
          >
           <Upload name="logo" action="/upload.do" listType="picture">
              <div>
                {/* <img src="" alt="" srcset=""/> */}
                <Avatar size={64} icon={<UserOutlined />} />
              </div>
          </Upload>
          </Form.Item>

          <Form.Item name='info' label="描述" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

        </Form>
    </Modal>
  );
}
export default AddCateModal