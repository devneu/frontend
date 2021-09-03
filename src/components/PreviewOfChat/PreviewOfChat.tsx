import React from 'react';
import { Avatar, Button } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import './PreviewOfChat.scss';
import { UserOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

const PreviewOfChat = () => {
  const a = 0;
  // eslint-disable-next-line no-console
  console.log(a);
  return (
    <div className="previewofchat">
      <div className="member">
        <Title level={4}>user info</Title>
        <Avatar icon={<UserOutlined />} />
      </div>
      <div className="group-members">
        <Title level={4}>Group Members</Title>
        <Avatar className="main-avatar" icon={<UserOutlined />} />
        <div>
          <Avatar icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
        </div>
      </div>
      <hr />

      <div className="photo-multimedia">
        <Paragraph>Photos & multimedia</Paragraph>
        <div className="media-list">
          <img src="#" alt="#" />
          <img src="#" alt="#" />
          <img src="#" alt="#" />
          <img src="#" alt="#" />
          <img src="#" alt="#" />
          <img src="#" alt="#" />
        </div>
        <Button className="show-all">View all</Button>
      </div>
      <hr />
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
    </div>
  );
};

export default PreviewOfChat;
