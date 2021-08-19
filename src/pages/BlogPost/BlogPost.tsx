import React from 'react';
import './BlogPost.scss';
import { Col, Row } from 'antd';
import SinglePost from '../../components/SinglePost/SinglePost';
import SearchWidget from '../../components/Search/Search';
import CategoriesWidget from '../../components/Categories/Categories';

const BlogPost = () => (
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

export default BlogPost;
