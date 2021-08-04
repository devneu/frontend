import React from 'react';
import renderer from 'react-test-renderer';
import ComingSoon from './ComingSoon';

describe('ComingSoon', () => {
    it('Should successfully render', () => {
        const wrapper = renderer
            .create(
                <ComingSoon />
            )
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});