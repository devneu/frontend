import renderer from 'react-test-renderer';
import SmallPostCard from './SmallPostCard';

describe('SmallPostCard', () => {
    it('Should successfully render', () => {
        const wrapper = renderer
            .create(
                <SmallPostCard postImg="post image" postTitle="post title" postText="post text" sizeBlock={12}/>
            )
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
