import React from 'react';
import BlogHeader from '../../components/BlogHeader';
import './Blog.scss';
import PostCardList from '../../components/BlogPosts/PostCardList';
import { postInfo } from '../../components/BlogPosts/data';

const Blog = () => (
  <>
    <BlogHeader title="Post Title" subtitle="Post Subtitle" />
    {/* @ts-ignore */}
    <PostCardList postInfo={postInfo} />
  </>
);

export default Blog;
