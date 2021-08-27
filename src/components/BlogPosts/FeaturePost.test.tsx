import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import FeaturePost from './FeaturePost';

describe('FeaturePost', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <FeaturePost
            post={{
              id: 1,
              img: 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
              date: 'January 21, 2011',
              title: 'DEV-17.com',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
              articleCaption: ['hello', 'deb-17'],
              articleText: ['lorem', 'ipsum'],
              tag: ['web', 'js'],
            }}
          />
          ,
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
