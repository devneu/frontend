import { Col, Row } from 'antd';
import React, { useState } from 'react';
import BlogHeader from '../../components/BlogHeader';
import Pagination from '../../components/Pagination';
import './Blog.scss';
import PostsCardList from '../../components/BlogPosts/PostCardList';
import { mockPosts } from '../../components/BlogPosts/data';
import SearchWidget from '../../components/Search';
import MaxWidthContent from '../../components/BlogPosts/MaxWidthContent';

const Blog = () => {
  const [featurePost, ...posts] = mockPosts;
  const [page, onPageChange] = useState(1);
  return (
    <>
      <BlogHeader title="Post Title" subtitle="Post Subtitle" />
      <MaxWidthContent>
        <Row justify="center" gutter={24}>
          <Col span={16}>
            <PostsCardList posts={posts} featurePost={featurePost} />
            <Pagination
              totalItems={51}
              pageSize={10}
              currentPage={page}
              onPageChange={onPageChange}
            />
          </Col>
          <Col span={8}>
            <SearchWidget />
          </Col>
        </Row>
      </MaxWidthContent>
    </>
  );
};

export default Blog;
