import { List } from 'antd';
import { useState } from 'react';
import { comment } from '../../types/blogTypes'
import AddCommentForm from '../AddCommentForm';
import Comment from './Comment';
import './Comments.scss'

interface CommentsProps {
   commentsList?: Array<comment> | null;
   onCommentAdded: (value: string, parentId: number | null) => void;
}

const Comments = ({ commentsList, onCommentAdded }: CommentsProps) => {
   const [replyTo, setReplyTo] = useState(null);
   const focus: boolean = replyTo ? true : false
   let commentsListHTML = <p>No comments yet. Be the first</p>;
   const nested = nestComments(commentsList);

   if (commentsList && commentsList.length !== 0) {
      commentsListHTML = (
         <List className="comments__list">
            {
               nested.map((comment: comment) => {
                  return (
                     <Comment
                        key={comment.commentId}
                        comment={comment}
                        onSelectReplyTo={(commentId: any) => setReplyTo(commentId)} />
                  )
               })
            }
         </List>
      )
   }
   return (
      <div className="comments">
         <AddCommentForm
            onSubmit={(value: string) => {
               if (value.length !== 0) {
                  onCommentAdded(value, replyTo);
                  setReplyTo(null)
               }
            }}
            focus={focus} />
         {commentsListHTML}
      </div>
   )
}

function nestComments(commentsList: any) {
   const commentMap: any = {};

   // move all the comments into a map of id => comment
   commentsList.forEach((comment: any) => {
      commentMap[comment.commentId] = comment;
   });

   // iterate over the comments again and correctly nest the children
   commentsList.forEach((comment: comment) => {

      if (comment.parentId !== null) {
         const parent = commentMap[comment.parentId];
         let ifExist: boolean = false;
         for (let child of parent.children) {
            if (child.commentId === comment.commentId) {
               ifExist = true;
               return
            }
         }
         if (!ifExist) {
            parent.children.push(comment);
         }
      }
   });

   // filter the list to return a list of correctly nested comments
   return commentsList.filter((comment: comment) => {
      return comment.parentId === null;
   });
}
export default Comments