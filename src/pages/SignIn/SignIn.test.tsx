window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

jest.mock('react-facebook-login', () => () => 'FacebookLogin');

import renderer from 'react-test-renderer';
import SignIn from './SignIn';

describe('SignIn', () => {
    it('Should successfully render', () => {
        const wrapper = renderer
            .create(
                <SignIn />
            )
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
