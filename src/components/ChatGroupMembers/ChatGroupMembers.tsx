import React from 'react';
import { Avatar, Typography } from 'antd';
import ChatSlider from '../ChatSlider/ChatSlider';
import { GroupChat } from '../../types/ChatPreview.interface';
import { slides } from '../../mock/mockChat';
import './СhatGroupMembers.scss';

interface GroupMembersProps {
  member: GroupChat;
}
const { Title } = Typography;

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
      <ChatSlider slides={slides} />
    </div>
  </div>
);

export default ChatGroupMembers;
