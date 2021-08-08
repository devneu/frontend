import { connect } from 'react-redux'
import store from '../../store'
import BlogPost, { OwnProps } from './BlogPost';
import { InitialState } from '../../reducers';
import BlogSelectors from '../../selectors/blog';
import { Post } from '../../types/blogTypes';
import { BlogActions } from '../../actions/BlogActions';

export interface StateProps {
   post?: Post | null
}
export interface DispatchProps {
   onCommentAdded: (value: string, parentId: number | null) => void;
}
const postId = 1;
const mapStateToProps = (state: InitialState) => {
   const post = BlogSelectors.postsSelector(state).find((post: Post) => {
      return post.postId == postId
   });

   return {
      post: BlogSelectors.postsSelector(state)
         .find((post: Post) => post.postId == postId),
   }
}

const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
   return {
      onCommentAdded: (value: string, parentId: number | null) => dispatch(BlogActions.addComment({ value, postId, parentId }))
   }
}

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(mapStateToProps, mapDispatchToProps)(BlogPost);
