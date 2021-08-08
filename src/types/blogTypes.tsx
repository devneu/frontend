export interface comment {
   commentId: number,
   parentId: number | null,
   children: [];
   commentText: string,
   userName: string,
   userAvatar?: string | null,
}

export interface Post {
   postId: number,
   comments: comment[]
}

export interface BlogState {
   posts: Array<Post>,
}