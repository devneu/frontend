import React from 'react';
import { Comment as AntdComment, Avatar } from 'antd';
import { Comment } from '../../types/blogTypes';
import scrollToElement from '../../utils/scrollTo';

interface CommentProps {
  comment: Comment;
  onSelectReplyTo: (commentId: number | null) => void;
}

function SingleComment({ comment: com, onSelectReplyTo }: CommentProps) {
  const { commentText, userName, userAvatar, commentId } = com;
  const childrenList = com.children?.map((child: Comment) => (
    <SingleComment key={child.commentId} comment={child} onSelectReplyTo={onSelectReplyTo} />
  ));
  return (
    <AntdComment
      actions={[
        <button
          type="submit"
          key="comment-nested-reply-to"
          className="comments__reply-btn"
          onClick={() => {
            onSelectReplyTo(commentId);
            scrollToElement('comments__form');
          }}
        >
          Reply to
        </button>,
      ]}
      author={<span className="comments__user-name">{userName}</span>}
      avatar={<Avatar className="comments__user-avatar" src={userAvatar} alt={userName} />}
      content={<p>{commentText}</p>}
    >
      {childrenList}
    </AntdComment>
  );
}

export default SingleComment;
