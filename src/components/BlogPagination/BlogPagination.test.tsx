import BlogPagination from './BlogPagination';
import renderer from 'react-test-renderer';

describe('BlogPagination', () => {
   it('Should successfully render', () => {
      const wrapper = renderer
         .create(
            <BlogPagination />
         )
         .toJSON();
      expect(wrapper).toMatchSnapshot();
   });
});