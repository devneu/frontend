import {matchMediaCaller} from "../../utils/setupjest";
import renderer from 'react-test-renderer';
import SignIn from './SignIn';

matchMediaCaller();

jest.mock('react-facebook-login', () => () => 'MockFacebookLogin');

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
