import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button } from 'antd';
import './AttachmentsOfChat.scss';

const AttachmentsOfChat = () => (
  <div className="attachments">
    <Paragraph>Attachments</Paragraph>
    <div className="document-list">
      <div className="file-item">
        <div>
          <img src="#" alt="#" />
        </div>
        <div className="file-info">how to create a case study</div>
      </div>
      <div className="file-item">
        <div>
          <img src="#" alt="#" />
        </div>
        <div className="file-info">Project Documents</div>
      </div>
      <div className="file-item">
        <img src="#" alt="#" />
        <div className="file-info">Competitor Analysis Template</div>
      </div>
    </div>
    <div>
      <Button className="show-all">View all</Button>
    </div>
  </div>
);

export default AttachmentsOfChat;
