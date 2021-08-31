import React from 'react';
import './Chat.scss';
import 'antd/dist/antd.css';
import { MailOutlined, MessageOutlined, CalendarOutlined, SmileOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

const Chat = () => (
  <section>
    <div className="main">
      <div className="menu">
        <div className="MenuTop"> Menu Logo</div>
        <div className="MenuIcons">
          <MailOutlined />
          <MessageOutlined />
          <CalendarOutlined />
          <SmileOutlined />
        </div>
        <div className="MenuBottom">
          <Switch defaultChecked size="small" />
          <br />
          <Switch size="small" defaultChecked />
          <div className="Dark mode"> Dark Mode</div>
        </div>
      </div>

      <div className="messages" />
      <div className="chat" />
      <div className="group" />
    </div>
  </section>
);

export default Chat;
