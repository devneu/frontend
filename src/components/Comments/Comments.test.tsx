import Comments from './Comments';
import renderer from 'react-test-renderer';

window.matchMedia = window.matchMedia || function () {
   return {
      matches: false,
      addListener: function () { },
      removeListener: function () { }
   };
};

describe('Comments', () => {

   it('Should successfully render', () => {
      const wrapper = renderer
         .create(
            <Comments />
         )
         .toJSON();
      expect(wrapper).toMatchSnapshot();
   });
});