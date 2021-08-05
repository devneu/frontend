import renderer from 'react-test-renderer';
import SmallPostCard from './SmallPostCard';

describe('SmallPostCard', () => {
    it('Should successfully render', () => {
        const wrapper = renderer
            .create(
                <SmallPostCard post={{"postImg": "post image", "postDate":" post date","postTitle":" post title","postText":"post text"}}/>
            )
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});