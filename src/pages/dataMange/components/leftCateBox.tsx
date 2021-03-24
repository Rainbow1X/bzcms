import React, { Key} from 'react';
import { Tree } from 'antd';
import { CarryOutOutlined} from '@ant-design/icons';
const treeData = [
  {
    title: '表情',
    key: '0-0',
    children: [
      {
        title: '非主流',
        key: '0-0-0',
        icon: <CarryOutOutlined/>,
      },
      {
        title: '动漫',
        key: '0-0-1',
        icon: <CarryOutOutlined/>,
      },
      {
        title: '情侣',
        key: '0-0-2',
        icon: <CarryOutOutlined/>,
      },
    ],
  },
  {
    title: '壁纸',
    key: '0-1',
    children: [
      {
        title: '动物',
        key: '0-1-0',
        icon: <CarryOutOutlined/>,
      },
    ],
  },
  {
    title: '专辑',
    key: '0-2',
    children: [
      {
        title: '小姐姐',
        key: '0-2-0',
        icon: <CarryOutOutlined/>,
      },{
        title: '漫威电影',
        key: '0-2-1',
        icon: <CarryOutOutlined/>,
      },
    ],
  },
];

const LeftCateBox = () => {

  const onSelect = (selectedKeys:Key[], info:any) => {
    console.log('selected', selectedKeys, info);
  };


  return (
    <div>
      <Tree
        showLine={true}
        showIcon={false}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default LeftCateBox