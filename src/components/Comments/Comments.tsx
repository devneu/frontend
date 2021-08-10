import { List } from 'antd';
import React, { useState } from 'react';
import { comment } from '../../types/blogTypes';
import AddCommentForm from '../AddCommentForm';
import Comment from './Comment';
import './Comments.scss';

interface CommentsProps {
  commentsList?: Array<comment> | null;
  onCommentAdded: (value: string, parentId: number | null) => void;
}

const Comments = ({ commentsList, onCommentAdded }: CommentsProps) => {
  const [replyTo, setReplyTo] = useState(null);
  let focus: boolean = false;
  if (replyTo) focus = true;
  let commentsListHTML = <p>No comments yet. Be the first</p>;
  const nested = nestComments(commentsList);

  if (commentsList && commentsList.length !== 0) {
    commentsListHTML = (
      <List className="comments__list">
        {nested.map((com: comment) => (
          <Comment
            key={com.commentId}
            comment={com}
            onSelectReplyTo={(commentId: any) => setReplyTo(commentId)}
          />
        ))}
      </List>
    );
  }
  return (
    <div className="comments">
      <AddCommentForm
        onSubmit={(value: string) => {
          if (value.length !== 0) {
            onCommentAdded(value, replyTo);
            setReplyTo(null);
          }
        }}
        focus={focus}
      />
      {commentsListHTML}
    </div>
  );
};

function nestComments(commentsList: any) {
  const commentMap: any = {};

  // move all the comments into a map of id => comment
  commentsList.forEach((com: any) => {
    commentMap[com.commentId] = com;
  });

  // iterate over the comments again and correctly nest the children
  commentsList.forEach((com: comment) => {
    if (com.parentId !== null) {
      const parent = commentMap[com.parentId];
      let ifExist: boolean = false;
      /* eslint-disable-next-line */
      for (const child of parent.children) {
        if (child.commentId === com.commentId) {
          ifExist = true;
          return;
        }
      }
      if (!ifExist) {
        parent.children.push(com);
      }
    }
  });

  // filter the list to return a list of correctly nested comments
  return commentsList.filter((com: comment) => com.parentId === null);
}

export default Comments;
