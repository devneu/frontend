import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import ChatSlider from './ChatSlider';
import './СhatGroupMembers.scss';
import { ChatData } from '../../types/ChatPreview.interface';

interface GroupMembersProps {
  data: ChatData;
}
const ChatGroupMembers = ({ data }: GroupMembersProps) => (
  <div className="group-members">
    <Title level={4}>Group Members</Title>
    <div className="img-members">
      <Avatar className="main-avatar" src={data.img} />
      <div className="members-avatar">
        <ChatSlider slider={data.memberImg} />
      </div>
    </div>
  </div>
);

export default ChatGroupMembers;
