import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button } from 'antd';
import './ChatGallery.scss';
import { Photos } from '../../types/ChatPreview.interface';

interface ChatGalleryProps {
  photos: Photos[];
}

const ChatGallery = ({ photos }: ChatGalleryProps) => (
  <div className="chat-gallery">
    <Paragraph>
      <strong>PHOTOS & MULTIMEDIA</strong>
    </Paragraph>
    <div className="gallery-list">
      {photos.map((photo: any) => (
        <img className="gallery-img" src={photo.img} key={photo.img} alt="#" />
      ))}
    </div>
    <Button className="show-all" type="link" block>
      View all
    </Button>
  </div>
);

export default ChatGallery;
