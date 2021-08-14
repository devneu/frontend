import React from 'react';
import './ComingSoon.scss';
import { Input, Button, Typography } from 'antd';
import ReactPlayer from 'react-player';

const { Title, Paragraph } = Typography;

const ComingSoon = () => (
  <div className="coming-soon">
    <ReactPlayer className="bg-video" url="https://youtu.be/XGw3OgCBo_U" loop muted playing />
    <div className="content">
      <Title className="title">Our Website is Coming Soon</Title>
      <Paragraph className="text">
        We&apos;re working hard to finish the development of the site. Sign up below to receive
        updates and to be noticed when we launch!
      </Paragraph>
      <form className="subscribe-form">
        <Input type="large" placeholder="Enter Email address..." />
        <Button type="primary">NOTIFY ME!</Button>
      </form>
    </div>
    <nav className="social-links">
      <a className="social-link" href="#twitter">
        <img
          className="social-icon"
          src={`${process.env.PUBLIC_URL}/images/twitter.png`}
          alt="twitter"
        />
      </a>
      <a className="social-link" href="#telegram">
        <img
          className="social-icon"
          src={`${process.env.PUBLIC_URL}/images/telegram.png`}
          alt="telegram"
        />
      </a>
    </nav>
  </div>
);

export default ComingSoon;
