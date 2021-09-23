import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import ChatSlider from './ChatSlider';
import { GroupChat } from '../../types/ChatPreview.interface';
import './СhatGroupMembers.scss';

interface GroupMembersProps {
  member: GroupChat;
}
const ChatGroupMembers = ({ member }: GroupMembersProps) => (
  <div className="chat-group-members">
    <img className="group-icon" src={member.icon} alt="" />
    <Title className="group-title" level={4}>
      Group Members
    </Title>
    <div className="group-images">
      <div className="main-user">
        <Avatar className="main-avatar" src={member.img} />
        <div className="main-name">
          {member.name}
          &nbsp;
          {member.lastName}
        </div>
        <div className="main-description">{member.description}</div>
      </div>
      <ChatSlider slides={member.memberImages} />
    </div>
  </div>
);

export default ChatGroupMembers;
