import React, { useState } from 'react';
import BlogHeader from '../../components/BlogHeader';
import Pagination from '../../components/Pagination';
import PostsCardList from '../../components/PostsCardList/PostCardList';
import { createMockPosts } from '../../mock/mockPost';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import './Blog.scss';
import SearchWidget from '../../components/widgets/SearchWidget/SearchWidget';
import CategoriesWidget from '../../components/widgets/CategoriesWidget/CategoriesWidget';
import SideWidget from '../../components/widgets/SideWidget/SideWidget';
import AddPost from '../../Modal/AddPost/AddPost';

const Blog = () => {
  const [featurePost, ...posts] = createMockPosts();
  const [page, onPageChange] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <BlogHeader title="Post Title" subtitle="Post Subtitle" />
      <LayoutPage
        className="blog-page"
        container
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
        side={(
          <>
            <button
              className="add-post"
              onClick={() => setModalActive(true)}
              type="button"
              title="Create post"
            >
              <img src={`${process.env.PUBLIC_URL}/images/plus_icon.png`} alt="add-post" />
            </button>
            <AddPost active={modalActive} setActive={setModalActive} />
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
