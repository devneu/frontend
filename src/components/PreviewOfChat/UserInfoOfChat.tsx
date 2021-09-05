import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './UserInfoOfChat.scss';

const UserInfoOfChat = () => (
  <div className="user-info">
    <Title level={4}>user info</Title>
    <Avatar className="user-avatar" size="large" icon={<UserOutlined />} />
  </div>
);

export default UserInfoOfChat;
