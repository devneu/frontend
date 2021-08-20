export enum PostActionsTypes {
  SET_CURRENT_ITEM = '[Post]: setCurrentItem',
}

export class PostActions {
  static setCurrentItem = (obj: object) => ({
    type: PostActionsTypes.SET_CURRENT_ITEM,
    payload: obj,
  });
}
