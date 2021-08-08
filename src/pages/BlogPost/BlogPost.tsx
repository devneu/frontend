import React from 'react'
import Comments from '../../components/Comments'
import { DispatchProps, StateProps } from './BlogPostContainer'

export interface OwnProps { };

type Props = StateProps & DispatchProps & OwnProps;

const BlogPost = ({ post, onCommentAdded }: Props) => {

   if (!post) return <h1>404 page (in dev)</h1>
   return (
      <Comments
         commentsList={post.comments}
         onCommentAdded={(value: string, replyTo: number | null) => onCommentAdded(value, replyTo)} />
   )
}

export default BlogPost;