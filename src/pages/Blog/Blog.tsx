import React from 'react';
import BlogHeader from '../../components/BlogHeader';
import './Blog.scss';
import { Search } from '../../components/BlogSearch/Search';

const Blog = () => (
  <>
    <BlogHeader title="Post Title" subtitle="Post Subtitle" />
    <Search />
  </>
);

export default Blog;
