import React from 'react';
import Comments from '../../components/Comments';
import { DispatchProps, StateProps } from './BlogPostContainer';

export interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

function BlogPost({ post, addComment }: Props) {
  if (!post) return <h1>404 page (in dev)</h1>;
  return (
    <Comments
      commentsList={post.comments}
      onCommentAdded={(value: string, replyTo: number | null) => addComment(value, replyTo)}
    />
  );
}

export default BlogPost;