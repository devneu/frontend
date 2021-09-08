import React from 'react';
import Post from '../../components/Post/Post';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import CategoriesWidget from '../../components/widgets/CategoriesWidget/CategoriesWidget';
import SideWidget from '../../components/widgets/SideWidget/SideWidget';
import SearchWidget from '../../components/widgets/SearchWidget/SearchWidget';
import './PostPage.scss';

const PostPage = () => (
  <LayoutPage
    className="post-page"
    container
    content={<Post />}
    side={(
      <>
        <SearchWidget />
        <CategoriesWidget />
        <SideWidget />
      </>
    )}
  />
);

export default PostPage;
