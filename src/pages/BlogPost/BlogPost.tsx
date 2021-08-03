import React from 'react'
import Comments from '../../components/Comments'

const commentsList = [
   {
      postID: 1,
      commentID: 1,
      replyTo: null,
      replyes: [
         {
            postID: 1,
            commentID: 2,
            replyTo: 1,
            replyes: [
               {
                  postID: 1,
                  commentID: 3,
                  replyTo: 2,
                  replyes: null,
                  commentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat corrupti praesentium aut dicta in illo. Obcaecati voluptas magni at.',
                  commenterName: 'John Newman',
                  commenterAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
               },
               {
                  postID: 1,
                  commentID: 4,
                  replyTo: 2,
                  replyes: null,
                  commentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat corrupti praesentium aut dicta in illo. Obcaecati voluptas magni at.',
                  commenterName: 'John Newman',
                  commenterAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
               },
            ],
            commentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat corrupti praesentium aut dicta in illo. Obcaecati voluptas magni at.',
            commenterName: 'John Newman',
            commenterAvatar: null
         },
         {
            postID: 1,
            commentID: 5,
            replyTo: 1,
            replyes: null,
            commentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat corrupti praesentium aut dicta in illo. Obcaecati voluptas magni at.',
            commenterName: 'John Newman',
            commenterAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
         },
      ],
      commentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat corrupti praesentium aut dicta in illo. Obcaecati voluptas magni at.',
      commenterName: 'John Newman',
      commenterAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
   },
   {
      postID: 1,
      commentID: 6,
      replyTo: null,
      replyes: null,
      commentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat corrupti praesentium aut dicta in illo. Obcaecati voluptas magni at.',
      commenterName: 'John Newman',
      commenterAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
   }
]

const BlogPost = () => {
   return (
      <Comments commentsList={commentsList} />
   )
}

export default BlogPost;