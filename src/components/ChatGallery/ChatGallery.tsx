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
    <Paragraph className="gallery-title" strong>
      Photos & Multimedia
    </Paragraph>
    <div className="gallery-list">
      {photos.map((photo) => (
        <img className="gallery-img" src={photo.img} key={photo.img} alt="#" />
      ))}
    </div>
    <Button className="show-all" type="link" block>
      View all
    </Button>
  </div>
);

export default ChatGallery;
