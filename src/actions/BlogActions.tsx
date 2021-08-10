enum BlogActionTypes {
  COMMENT_ADDED = '[Blog]: Comment Added',
}

class BlogActions {
  static addComment = (payload: { value: string; postId: number; parentId: number | null }) => ({
    type: BlogActionTypes.COMMENT_ADDED,
    payload,
  });
}

export { BlogActionTypes, BlogActions };
