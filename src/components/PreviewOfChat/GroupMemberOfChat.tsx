import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './GroupMemberOfChat.scss';

const GroupMemberOfChat = () => (
  <div className="group-members">
    <Title level={4}>Group Members</Title>
    <div className="img-members">
      <Avatar className="main-avatar" icon={<UserOutlined />} />
      <div className="members-avatar">
        <Avatar className="member-avatar" icon={<UserOutlined />} />
        <Avatar className="member-avatar" icon={<UserOutlined />} />
        <Avatar className="member-avatar" icon={<UserOutlined />} />
        <Avatar className="member-avatar" icon={<UserOutlined />} />
        <Avatar className="member-avatar" icon={<UserOutlined />} />
        <Avatar className="member-avatar" icon={<UserOutlined />} />
      </div>
    </div>
  </div>
);

export default GroupMemberOfChat;
