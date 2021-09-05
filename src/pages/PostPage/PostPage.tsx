import React from 'react';
import Post from '../../components/Post/Post';
import SearchWidget from '../../components/Search/Search';
import CategoriesWidget from '../../components/Categories/Categories';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import SideWidget from '../../components/SideWidget/SideWidget';
import './PostPage.scss';

const PostPage = () => (
  <LayoutPage
    content={<Post />}
    sider={(
      <>
        <SearchWidget />
        <CategoriesWidget />
        <SideWidget />
      </>
    )}
  />
);

export default PostPage;
