import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SimpleSlider from './SimpleSlider';
import './СhatGroupMembers.scss';

const ChatGroupMembers = ({ data }: any) => (
  <div className="group-members">
    <Title level={4}>Group Members</Title>
    <div className="img-members">
      <Avatar className="main-avatar" src={data.mainImg} icon={<UserOutlined />} />
      <div className="members-avatar">
        <SimpleSlider slider={data.groupMemberImg} />
      </div>
    </div>
  </div>
);

export default ChatGroupMembers;
