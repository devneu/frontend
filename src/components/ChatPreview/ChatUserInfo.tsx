import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import './ChatUserInfo.scss';
import { ChatData } from '../../types/ChatPreview.interface';

interface UserInfoProps {
  photo: ChatData;
}
const ChatUserInfo = ({ photo }: UserInfoProps) => (
  <div className="user-info">
    <Title level={4}>user info</Title>
    <Avatar className="user-avatar" src={photo.img} size="large" />
  </div>
);

export default ChatUserInfo;
