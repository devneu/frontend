import { AnyAction } from 'redux';
import { BlogActionTypes } from '../actions/BlogActions';

import { BlogState, comment, Post } from '../types/blogTypes';

const blogState: BlogState = {
  posts: [
    {
      postId: 1,
      comments: [
        {
          commentId: 1,
          parentId: null,
          children: [],
          commentText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque distinctio praesentium quisquam laudantium tempore? Illum fugit esse nihil obcaecati?',
          userName: 'John Newman 1',
          userAvatar: null,
        },
        {
          commentId: 2,
          parentId: 1,
          children: [],
          commentText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque distinctio praesentium quisquam laudantium tempore? Illum fugit esse nihil obcaecati?',
          userName: 'John Newman 2',
          userAvatar: null,
        },
        {
          commentId: 3,
          parentId: 2,
          children: [],
          commentText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque distinctio praesentium quisquam laudantium tempore? Illum fugit esse nihil obcaecati?',
          userName: 'John Newman 3',
          userAvatar: null,
        },
        {
          commentId: 4,
          parentId: null,
          children: [],
          commentText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque distinctio praesentium quisquam laudantium tempore? Illum fugit esse nihil obcaecati?',
          userName: 'John Newman 4',
          userAvatar: null,
        },
      ],
    },
  ],
};

const blogReducer = (state: BlogState = blogState, action: AnyAction): BlogState => {
  switch (action.type) {
    case BlogActionTypes.ADD_COMMENT: {
      const { postId, value, parentId } = action.payload;

      const postIdx = state.posts.findIndex((post: Post) => post.postId === postId);
      const { comments } = state.posts[postIdx];

      const newComment: comment = {
        commentId: comments.length + 1,
        parentId,
        children: [],
        commentText: value,
        userName: `Anonim ${comments.length + 1}`,
        userAvatar: null,
      };

      const newPost: Post = {
        postId,
        comments: [...state.posts[postIdx].comments, newComment],
      };

      return {
        ...state,
        posts: [...state.posts.slice(0, postIdx), newPost, ...state.posts.slice(postIdx + 1)],
      };
    }
    default:
      return state;
  }
};

export default blogReducer;
