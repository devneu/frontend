import React, { useState } from 'react';
import BlogHeader from '../../components/BlogHeader';
import Pagination from '../../components/Pagination';
import PostsCardList from '../../components/PostsCardList/PostCardList';
import SearchWidget from '../../components/Search/Search';
import CategoriesWidget from '../../components/Categories/Categories';
import { createMockPosts } from '../../mock/mockPost';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import SideWidget from '../../components/SideWidget/SideWidget';
import './Blog.scss';

const Blog = () => {
  const [featurePost, ...posts] = createMockPosts();
  const [page, onPageChange] = useState(1);
  return (
    <>
      <BlogHeader title="Post Title" subtitle="Post Subtitle" />
      <LayoutPage
        content={(
          <>
            <PostsCardList posts={posts} featurePost={featurePost} />
            <Pagination
              totalItems={51}
              pageSize={10}
              currentPage={page}
              onPageChange={onPageChange}
            />
          </>
        )}
        sider={(
          <>
            <SearchWidget />
            <CategoriesWidget />
            <SideWidget />
          </>
        )}
      />
    </>
  );
};

export default Blog;
