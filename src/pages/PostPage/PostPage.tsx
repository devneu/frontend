import React from 'react';
import Post from '../../components/Post/Post';
import SideWidget from '../../components/widgets/SideWidget/SideWidget';
import SearchWidget from '../../components/widgets/SearchWidget/SearchWidget';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import CategoriesWidget from '../../components/widgets/CategoriesWidget/CategoriesWidget';
import { DispatchProps, StateProps } from './PostPageContainer';
import Comments from '../../components/Comments';
import './PostPage.scss';

export interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

const PostPage = ({ post }: Props) => (
  <LayoutPage
    className="post-page"
    container
    content={(
      <>
        <Post />
        <Comments
          commentsList={post?.comments}
        />
      </>
        )}
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
/*
import React from 'react';
import Comments from '../../components/Comments';
import { DispatchProps, StateProps } from './PostPageContainer';

export interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

function PostPage({ post, addComment }: Props) {
  if (!post) return <h1>404 page (in dev)</h1>;
  return (
    <Comments
      commentsList={post.comments}
      onCommentAdded={(value: string, replyTo: number | null) => addComment(value, replyTo)}
    />
  );
}

export default PostPage;
*/
