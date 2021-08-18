import { Col, Row } from 'antd';
import React, { useState } from 'react';
import BlogHeader from '../../components/BlogHeader';
import Pagination from '../../components/Pagination';
import './Blog.scss';
import PostsCardList from '../../components/BlogPosts/PostCardList';
import SearchWidget from '../../components/Search';
import { mockPosts } from '../../components/BlogPosts/data';

const Blog = () => {
  const [featurePost, ...posts] = mockPosts;
  const [page, onPageChange] = useState(1);
  return (
    <>
      <BlogHeader title="Post Title" subtitle="Post Subtitle" />
      <Row className="container" justify="center">
        <Col span={14}>
          <PostsCardList posts={posts} featurePost={featurePost} />
          <Pagination
            totalItems={51}
            pageSize={10}
            currentPage={page}
            onPageChange={onPageChange}
          />
        </Col>
        <Col span={6} className="sidebar-blog-post">
          <SearchWidget />
        </Col>
      </Row>
    </>
  );
};

export default Blog;
