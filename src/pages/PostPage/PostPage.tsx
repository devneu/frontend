import React from 'react';
import './PostPage.scss';
import { Col, Layout, Row } from 'antd';
import Post from '../../components/Post/Post';
import SearchWidget from '../../components/Search/Search';
import CategoriesWidget from '../../components/Categories/Categories';

const PostPage = () => (
  <Layout className="post-page container">
    <Row justify="center">
      <Col span={14}>
        <Post />
      </Col>
      <Col span={6} className="sidebar">
        <SearchWidget />
        <CategoriesWidget />
      </Col>
    </Row>
  </Layout>
);

export default PostPage;
