import { connect } from 'react-redux';
import BlogPost, { OwnProps } from './BlogPost';
import { InitialState } from '../../reducers';
import BlogSelectors from '../../selectors/blog';
import { Post } from '../../types/blogTypes';
import { BlogActions } from '../../actions/BlogActions';

export interface StateProps {
  post?: Post | null;
}
export interface DispatchProps {
  addComment: (value: string, parentId: number | null) => void;
}

function selectPostById(state: InitialState, id: number) {
  const posts = BlogSelectors.postsSelector(state);
  return posts.find((post: Post) => post.postId === id);
}

const postId = 1;
function mapStateToProps(state: InitialState) {
  return {
    post: selectPostById(state, postId),
  };
}
const mapDispatchToProps = {
  addComment: (value: string, parentId: number | null) => BlogActions.addComment({
    value,
    postId,
    parentId,
  }),
};

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(
  mapStateToProps,
  mapDispatchToProps,
)(BlogPost);
