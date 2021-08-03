import BlogHeader from './BlogHeader';
import renderer from 'react-test-renderer';

describe('BlogHeader', () => {
   it('Should successfully render', () => {
      const wrapper = renderer
         .create(
            <BlogHeader title="Blog Title" subtitle="Blog Subtitle" />
         )
         .toJSON();
      expect(wrapper).toMatchSnapshot();
   });
});