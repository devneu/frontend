export interface Comment {
  commentId: number;
  parentId: number | null;
  children?: Comment[] | [] | null;
  commentText: string;
  userName: string;
  userAvatar?: string | null;
}

export interface Post {
  postId: number;
  comments: Comment[];
}
