import FormErrorMassage from './FormErrorMassage';
import renderer from 'react-test-renderer';
import React from "react";

it('renders correctly', () => {
    const tree = renderer
        .create(<FormErrorMassage message="http://www.facebook.com"></FormErrorMassage>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
