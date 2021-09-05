import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button } from 'antd';
import './GalleryOfChat.scss';

const GalleryOfChat = () => (
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
);

export default GalleryOfChat;
