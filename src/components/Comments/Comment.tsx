import React from 'react';
import { Comment as AntdComment, Avatar } from 'antd';
import { comment } from '../../types/blogTypes';
import scrollToElement from '../../utils/scrollToElement';

interface CommentProps {
  comment: comment;
  onSelectReplyTo: (commentId: number | null) => void;
}

function Comment({ comment: com, onSelectReplyTo }: CommentProps) {
  const { commentText, userName, userAvatar, commentId } = com;
  const childrenList = com.children.map((child: comment) => (
    <Comment key={child.commentId} comment={child} onSelectReplyTo={onSelectReplyTo} />
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

export default Comment;
