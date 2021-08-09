import React from 'react';
import './ComingSoon.scss';
import { Input, Button, Typography } from 'antd';
import ReactPlayer from 'react-player';
import telegram from './images/telegram.png';
import twitter from './images/twitter.png';

const { Title } = Typography;

const ComingSoon = () => {
  <div className="coming-soon-page">
    <ReactPlayer
      className="bg-video"
      url="https://www.youtube.com/watch?v=sRE5iQCdRvE"
      loop
      muted
      playing
    />
    <header className="coming-soon-header">
      <div className="subscribe-form">
        <Title level={1}>Our Website is Coming Soon</Title>
        <p>
          We apos; re working hard to finish the development of the site. Sign up below to receive
          updates and to be noticed when we launch!
        </p>
        <div className="row-input-mail">
          <Input type="large" placeholder="Enter Email address..." />
          <Button type="primary">NOTIFY ME!</Button>
        </div>
      </div>
      <div className="social-links">
        <div className="social-link">
          {/* eslint-disable spaced-comment */}
          <a href="#twitters">
            <img src={String(twitter)} alt="twitter" />
          </a>
        </div>
        <div className="social-link">
          {/* eslint-disable spaced-comment */}
          <a href="#telegrams">
            <img src={String(telegram)} alt="telegram" />
          </a>
        </div>
      </div>
    </header>
  </div>;
};

export default ComingSoon;
