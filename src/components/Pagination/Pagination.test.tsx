import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<Pagination totalItems={500} pageSize={141} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
