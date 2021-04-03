import { Modal,Input,Form} from 'antd';
import React from "react"
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

const AddSectorModal:React.FC<propsType>=(props)=>{
  const {isShow,handelOk,handleCancel,title}=props 
  const onFinish = (values: any) => {
    console.log(values);
  };
  return(
    <Modal title={title} okText="添加" cancelText="取消" visible={isShow} onOk={handelOk} onCancel={handleCancel}>
      
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name='name' label="名称" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='page' label="装载页面" rules={[{required: true}]}>
            <Input />
          </Form.Item>
          <Form.Item name='email' label="是否为专辑" rules={[{ type: 'email'}]}>
            <Input />
          </Form.Item>
        </Form>
    </Modal>
  );
}
export default AddSectorModal