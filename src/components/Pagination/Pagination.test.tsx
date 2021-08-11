import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <Pagination
          totalItems={500}
          pageSize={10}
          currentPage={1}
          onPageChange={() => console.log('change page')}
        />,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
