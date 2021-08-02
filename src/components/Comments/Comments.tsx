import React, { ReactNode } from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import './Comments.scss'

const { TextArea } = Input;

interface SingleCommentProps {
   children?: ReactNode;
}
const SingleComment = ({ children }: SingleCommentProps) => (
   <Comment
      actions={[<span key="comment-nested-reply-to">Reply to Commenter</span>]}
      author={<span className="comments__commentor-name">Commenter Name</span>}
      avatar={
         <Avatar className="comments__commentor-avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Commentor Name"
         />
      }
      content={
         <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure).
         </p>
      }
   >
      {children}
   </Comment>
)

const Comments = () => {
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
            <SingleComment>
               <SingleComment />
               <SingleComment />
            </SingleComment>
            <SingleComment />
         </List>
      </div>
   )
}



export default Comments