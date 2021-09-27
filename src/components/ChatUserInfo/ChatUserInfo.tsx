import React from 'react';
import Title from 'antd/es/typography/Title';
import { Avatar } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { UserInfo } from '../../types/ChatPreview.interface';
import './ChatUserInfo.scss';

interface ChatUserProps {
  data: UserInfo;
}

const ChatUserInfo = ({ data }: ChatUserProps) => (
  <div className="user-info">
    <Title level={4}>user info</Title>
    <Avatar className="user-avatar" src={data.img} size="large" />
    <Paragraph className="mg-bot-0">
      {data.name}
      &nbsp;
      {data.lastName}
    </Paragraph>
    <Paragraph className="mg-bot-0">
      +
      {data.phoneNumber}
    </Paragraph>
    <Paragraph className="mg-bot-0">{data.description}</Paragraph>
  </div>
);

export default ChatUserInfo;
