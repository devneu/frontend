import React from 'react';
import BlogHeader from '../../components/BlogHeader';
import Pagination from '../../components/Pagination';
import './Blog.scss';

const Blog = () => (
  <>
    <BlogHeader
      title="Welcome to our blog"
      subtitle="This is subtitle. Lorem ipsum dolor sit amet."
    />
    <Pagination totalItems={51} pageSize={10} />
  </>
);

export default Blog;
