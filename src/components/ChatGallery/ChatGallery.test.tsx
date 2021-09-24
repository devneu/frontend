import React from 'react';
import renderer from 'react-test-renderer';
import ChatGallery from './ChatGallery';
import { photos } from '../../mock/mockChat';

describe('ChatGallery', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<ChatGallery photos={photos} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
