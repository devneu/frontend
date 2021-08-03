import Pagination from './Pagination';
import renderer from 'react-test-renderer';

describe('BlogPagination', () => {
   it('Should successfully render', () => {
      const wrapper = renderer
         .create(
            <Pagination
               defaultCurrentPage={3}
               totalItems={500} />
         )
         .toJSON();
      expect(wrapper).toMatchSnapshot();
   });
});