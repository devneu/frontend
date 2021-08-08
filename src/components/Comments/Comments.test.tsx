import Comments from './Comments';
import renderer from 'react-test-renderer';

window.matchMedia = window.matchMedia || function () {
   return {
      matches: false,
      addListener: function () { },
      removeListener: function () { }
   };
};
const commentsList = [
   {
      postId: 1,
      commentId: 10,
      replyTo: null,
      replyes: null,
      commentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat corrupti praesentium aut dicta in illo. Obcaecati voluptas magni at.',
      userName: 'John Newman',
      userAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
   }
]
describe('Comments', () => {

   it('Should successfully render', () => {
      const wrapper = renderer
         .create(
            <Comments commentsList={commentsList} />
         )
         .toJSON();
      expect(wrapper).toMatchSnapshot();
   });
});