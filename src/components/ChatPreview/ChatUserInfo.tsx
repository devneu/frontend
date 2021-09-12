import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './ChatUserInfo.scss';

const ChatUserInfo = ({ userData }: any) => (
  <div className="user-info">
    <Title level={4}>user info</Title>
    {userData.map((data: any) => (
      <>
        <Avatar className="user-avatar" src={data.img} size="large" icon={<UserOutlined />} />
      </>
    ))}
  </div>
);

export default ChatUserInfo;
