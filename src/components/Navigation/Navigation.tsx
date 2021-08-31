import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Layout, Menu } from 'antd';
import { DeploymentUnitOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function Navigation() {
  const location = useLocation();

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <nav className="navigation">
        <DeploymentUnitOutlined
          className="navigation-logo"
          style={{ fontSize: '30px', color: '#ffffff' }}
        />
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="/weather">
            <NavLink to="/weather">Weather</NavLink>
          </Menu.Item>
          <Menu.Item key="/chat">
            <NavLink to="/chat">Chat</NavLink>
          </Menu.Item>
          <Menu.Item key="/blog">
            <NavLink to="/blog">Blog</NavLink>
          </Menu.Item>
          <Menu.Item key="/blog-post">
            <NavLink to="/blog-post">Blog Post</NavLink>
          </Menu.Item>
          <Menu.Item key="/sign-in">
            <NavLink to="/sign-in">Sign In</NavLink>
          </Menu.Item>
          <Menu.Item key="/redux-example">
            <NavLink to="/redux-example">Redux Example</NavLink>
          </Menu.Item>
          <Menu.Item key="/forgot-password">
            <NavLink to="/forgot-password">Forgot Password</NavLink>
          </Menu.Item>
          <Menu.Item key="/sign-out">
            <NavLink to="/sign-out">Create Account</NavLink>
          </Menu.Item>
          <Menu.Item key="/coming-soon">
            <NavLink to="/coming-soon">Coming Soon</NavLink>
          </Menu.Item>
        </Menu>
      </nav>
    </Header>
  );
}
