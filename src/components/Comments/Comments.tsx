import React, { ReactNode } from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import './Comments.scss'

const { TextArea } = Input;

interface comment {
   postID: number,
   commentID: number,
   replyTo?: number | null,
   replyes?: comment[] | null,
   commentText: string,
   commenterName: string,
   commenterAvatar?: string | null,
}
interface SingleCommentProps {
   comment: comment,
   children?: ReactNode,
}

const SingleComment = ({ children, comment }: SingleCommentProps) => {
   const { commentText, commenterName, commenterAvatar } = comment;
   const commenterFirstName: string = commenterName.split(' ')[0];
   return (
      <Comment
         actions={[<span key="comment-nested-reply-to">Reply to {commenterFirstName}</span>]}
         author={<span className="comments__commentor-name">{commenterName}</span>}
         avatar={
            <Avatar className="comments__commentor-avatar"
               src={commenterAvatar}
               alt={commenterName}
            />
         }
         content={
            <p>{commentText}</p>
         }
      >
         {children}
      </Comment>
   )
}

function showComments(commentsList: any) {
   return commentsList.map((comment: comment) => {
      const { replyes, commentID } = comment
      if (Array.isArray(replyes)) {
         return (
            <SingleComment
               key={commentID}
               comment={comment}>
               {showComments(comment.replyes)}
            </SingleComment>
         )
      }
      return <SingleComment
         key={commentID}
         comment={comment} />
   })
}

const Comments = ({ commentsList }: any) => {
   return (
      <div className="comments">
         <Form className="comments__form">
            <Form.Item>
               <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
               <Button htmlType="submit" type="primary">
                  Add Comment
               </Button>
            </Form.Item>
         </Form>

         <List className="comments__list">
            {
               showComments(commentsList)
            }
         </List>
      </div>
   )
}

export default Comments