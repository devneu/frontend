import React from 'react';
import { Button, Typography, Image } from 'antd';
import './ChatGallery.scss';
import { Photos } from '../../types/ChatPreview.interface';

interface ChatGalleryProps {
  photos: Photos[];
}
const { Paragraph } = Typography;

const ChatGallery = ({ photos }: ChatGalleryProps) => (
  <div className="chat-gallery">
    <Paragraph className="gallery-title" strong>
      Photos & Multimedia
    </Paragraph>
    <div className="gallery-list">
      <Image.PreviewGroup>
        {photos.map((photo) => (
          <Image
            className="gallery-img"
            src={photo.img}
            key={photo.img}
            alt="#"
            height={55}
            width={55}
          />
        ))}
      </Image.PreviewGroup>
    </div>
    <Button className="show-all" type="link" block>
      View all
    </Button>
  </div>
);

export default ChatGallery;
