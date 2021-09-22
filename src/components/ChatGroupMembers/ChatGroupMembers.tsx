import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import ChatSlider from './ChatSlider';
import './СhatGroupMembers.scss';
import { groupData } from '../../types/ChatPreview.interface';

interface GroupMembersProps {
  data: groupData;
}
const ChatGroupMembers = ({ data }: GroupMembersProps) => (
  <div className="chat-group-members">
    <img className="group-icon" src={data.icon} alt="" />
    <Title className="group-members" level={4}>
      Group Members
    </Title>
    <div className="group-img-members">
      <div className="main-user">
        <Avatar className="main-user-avatar" src={data.img} />
        <div className="main-user-name">
          <strong>{data.name}</strong>
        </div>
        <div className="main-user-description">{data.description}</div>
      </div>
      <ChatSlider slides={data.memberImgs} />
    </div>
  </div>
);

export default ChatGroupMembers;
