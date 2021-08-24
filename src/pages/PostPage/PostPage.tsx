import React from 'react';
import './PostPage.scss';
import { Col, Row } from 'antd';
import SinglePost from '../../components/Post/Post';
import SearchWidget from '../../components/Search/Search';
import CategoriesWidget from '../../components/Categories/Categories';

const PostPage = () => (
  <>
    <Row className="container" justify="center">
      <Col span={14}>
        <SinglePost />
      </Col>
      <Col span={6} className="sidebar-blog-post">
        <SearchWidget />
        <CategoriesWidget />
      </Col>
    </Row>
  </>
);

export default PostPage;
