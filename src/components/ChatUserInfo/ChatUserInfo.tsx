import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import './ChatUserInfo.scss';
import { UserInfo } from '../../types/ChatPreview.interface';

interface ChatUserProps {
  photo: UserInfo;
}
const ChatUserInfo = ({ photo }: ChatUserProps) => (
  <div className="user-info">
    <Title level={4}>user info</Title>
    <Avatar className="user-avatar" src={photo.img} size="large" />
  </div>
);

export default ChatUserInfo;
