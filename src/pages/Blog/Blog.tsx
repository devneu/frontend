import React from 'react';
import BlogHeader from '../../components/BlogHeader';
import './Blog.scss';
import PostsCardList from '../../components/BlogPosts/PostCardList';
import { mockPosts } from '../../components/BlogPosts/data';

const Blog = () => {
  const [featurePost, ...posts] = mockPosts;
  return (
    <>
      <BlogHeader title="Post Title" subtitle="Post Subtitle" />
      <PostsCardList posts={posts} featurePost={featurePost} />
    </>
  );
};

export default Blog;
