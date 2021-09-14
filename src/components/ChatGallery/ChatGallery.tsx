import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button } from 'antd';
import './ChatGallery.scss';
import { ChatData } from '../../types/ChatPreview.interface';

interface photosProps {
  photos: ChatData[];
}
const ChatGallery = ({ photos }: photosProps) => (
  <div className="chat-gallery">
    <Paragraph>Photos & multimedia</Paragraph>
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
