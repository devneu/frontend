enum BlogActionTypes {
  ADD_COMMENT = '[Blog]: Add Comment',
}

class BlogActions {
  static addComment = (payload: { value: string; postId: number; parentId: number | null }) => ({
    type: BlogActionTypes.ADD_COMMENT,
    payload,
  });
}

export { BlogActionTypes, BlogActions };
