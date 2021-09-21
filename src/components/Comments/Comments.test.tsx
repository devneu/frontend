import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './Comments';
import { Comment } from '../../types/blogTypes';

const commentsList: Comment[] = [
  {
    commentId: 3,
    parentId: null,
    children: [],
    commentText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque distinctio praesentium quisquam laudantium tempore? Illum fugit esse nihil obcaecati?',
    userName: 'John Newman 3',
    userAvatar: null,
  },
  {
    commentId: 1,
    parentId: 3,
    children: [],
    commentText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque distinctio praesentium quisquam laudantium tempore? Illum fugit esse nihil obcaecati?',
    userName: 'John Newman 3',
    userAvatar: null,
  },
];
describe('Comments', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(<Comments commentsList={commentsList} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
