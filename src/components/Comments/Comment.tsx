import { ReactNode } from 'react'
import { Comment as AntdComment, Avatar } from 'antd';
import { comment } from '../../types/blogTypes';
import scrollToElement from '../../utils/scrollToElement'

interface CommentProps {
   comment: comment,
   children?: ReactNode,
   child?: comment[] | null,
   onSelectReplyTo: (commentId: number | null) => void;
}

const Comment = ({ comment, onSelectReplyTo }: CommentProps) => {
   const { commentText, userName, userAvatar, commentId } = comment;
   const [firstName, lastName] = userName.split(' ');

   const childrenList = comment.children.map((child: comment) => {
      return <Comment
         key={child.commentId}
         comment={child}
         onSelectReplyTo={onSelectReplyTo} />
   })
   return (
      <AntdComment
         actions={[<span
            key="comment-nested-reply-to"
            onClick={() => {
               onSelectReplyTo(commentId)
               scrollToElement('comments__form')
            }}>
            Reply to {firstName}</span>]}
         author={<span className="comments__user-name">{userName}</span>}
         avatar={
            <Avatar className="comments__user-avatar"
               src={userAvatar}
               alt={userName}
            />
         }
         content={
            <p>{commentText}</p>
         }
      >
         {childrenList}
      </AntdComment>
   )
}

export default Comment;