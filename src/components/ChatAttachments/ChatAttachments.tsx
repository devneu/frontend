import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button } from 'antd';
import './ChatAttachments.scss';
import { Attachments } from '../../types/ChatPreview.interface';

interface ChatAttachmentsProps {
  attachments: Attachments[];
}

const ChatAttachments = ({ attachments }: ChatAttachmentsProps) => (
  <div className="chat-attachments">
    <Paragraph className="attachments-title" strong>
      Attachments
    </Paragraph>
    <div className="file-list">
      <Paragraph className="file-source">Source file</Paragraph>
      {attachments.map((attachment) => (
        <div className="file-item" key={attachment.img}>
          <img className="file-icon" src={attachment.img} alt="#" />
          <div className="file-info">{attachment.description}</div>
        </div>
      ))}
    </div>
    <Button className="show-all" type="link" block>
      View all
    </Button>
  </div>
);

export default ChatAttachments;
