import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import ChatSlider from './ChatSlider';
import { GroupChat } from '../../types/ChatPreview.interface';
import './СhatGroupMembers.scss';

interface GroupMembersProps {
  data: GroupChat;
}
const ChatGroupMembers = ({ data }: GroupMembersProps) => (
  <div className="chat-group-members">
    <img className="group-icon" src={data.icon} alt="" />
    <Title className="group-title" level={4}>
      Group Members
    </Title>
    <div className="group-images">
      <div className="main-user">
        <Avatar className="main-avatar" src={data.img} />
        <div className="main-name">
          {data.name}
          &nbsp;
          {data.lastName}
        </div>
        <div className="main-description">{data.description}</div>
      </div>
      <ChatSlider slides={data.memberImages} />
    </div>
  </div>
);

export default ChatGroupMembers;
