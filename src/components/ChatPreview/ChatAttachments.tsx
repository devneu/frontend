import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button } from 'antd';
import './ChatAttachments.scss';

const ChatAttachments = ({ attachments }: any) => (
  <div className="attachments">
    <Paragraph>Attachments</Paragraph>
    <div className="file-list">
      {attachments.map((attachment: any) => (
        <div className="file-item">
          <img className="file-icon" src={attachment.img} alt="#" />
          <div className="file-info">{attachment.description}</div>
        </div>
      ))}
    </div>
    <Button className="show-all">View all</Button>
  </div>
);

export default ChatAttachments;
