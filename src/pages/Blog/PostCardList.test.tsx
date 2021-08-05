import renderer from 'react-test-renderer';
import PostCardList from "./PostCardList";

describe('SmallPostCard', () => {
    it('Should successfully render', () => {
        const wrapper = renderer
            .create(
                <PostCardList />
            )
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});