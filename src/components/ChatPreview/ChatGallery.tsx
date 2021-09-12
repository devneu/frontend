import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button } from 'antd';
import './ChatGallery.scss';

const ChatGallery = ({ photos }: any) => (
  <div className="photo-multimedia">
    <Paragraph>Photos & multimedia</Paragraph>
    <div className="media-list">
      {
        // eslint-disable-next-line react/no-array-index-key
        photos.map((photo: any) => (
          <img className="gallery-img" src={photo.img} key={photo.img} alt="#" />
        ))
      }
    </div>
    <Button className="show-all">View all</Button>
  </div>
);

export default ChatGallery;
