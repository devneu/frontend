import { createSelector } from 'reselect';
import { InitialState } from '../reducers/index';
import { BlogState } from '../reducers/blog';

class BlogSelectors {
  static domainSelector = (state: InitialState) => state.blog;

  static postsSelector = createSelector(
    BlogSelectors.domainSelector,
    (state: BlogState) => state.posts,
  );
}

export default BlogSelectors;
