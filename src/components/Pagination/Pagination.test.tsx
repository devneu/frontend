import Pagination from './Pagination';
import renderer from 'react-test-renderer';

describe('Pagination', () => {
   it('Should successfully render', () => {
      const wrapper = renderer
         .create(
            <Pagination
               defaultCurrentPage={3}
               totalItems={500}
               currentPage={152}
               pageSize={141} />
         )
         .toJSON();
      expect(wrapper).toMatchSnapshot();
   });
});