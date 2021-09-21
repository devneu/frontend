import { List } from 'antd';
import React, { useState } from 'react';
import { Comment } from '../../types/blogTypes';
import AddCommentForm from '../AddCommentForm';
import SingleComment from './SingleComment';
import './Comments.scss';

interface CommentsProps {
  commentsList?: Array<Comment> | null;
}

const Comments = ({ commentsList }: CommentsProps) => {
  const [replyTo, setReplyTo] = useState<number | null>(null);
  console.log(replyTo);

  return (
    <div className="comments">
      <AddCommentForm />
      {
          commentsList?.length !== 0
            ? (
              <List className="comments__list">
                {commentsList?.map((comment: Comment) => (
                  <SingleComment
                    key={comment.commentId}
                    comment={comment}
                    onSelectReplyTo={setReplyTo}
                  />
                ))}
              </List>
            )
            : <p>No comments yet. Be the first</p>
      }
    </div>
  );
};

export default Comments;
