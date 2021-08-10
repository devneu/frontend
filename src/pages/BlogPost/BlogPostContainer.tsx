import { connect } from 'react-redux';
import store from '../../store';
import BlogPost, { OwnProps } from './BlogPost';
import { InitialState } from '../../reducers';
import BlogSelectors from '../../selectors/blog';
import { Post } from '../../types/blogTypes';
import { BlogActions } from '../../actions/BlogActions';

export interface StateProps {
  post?: Post | null;
}
export interface DispatchProps {
  onCommentAdded: (value: string, parentId: number | null) => void;
}
const postId = 1;
function mapStateToProps(state: InitialState) {
  const posts = BlogSelectors.postsSelector(state);
  return {
    post: posts.find((post: Post) => post.postId === postId),
  };
}
function mapDispatchToProps(dispatch: typeof store.dispatch) {
  return {
    onCommentAdded: (value: string, parentId: number | null) => dispatch(
      BlogActions.addComment({
        value,
        postId,
        parentId,
      }),
    ),
  };
}

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(
  mapStateToProps,
  mapDispatchToProps,
)(BlogPost);
