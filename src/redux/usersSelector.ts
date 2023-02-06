import { AppReducers } from './redux-store';
export const getUser = (state: AppReducers) => {
  return state.user.users;
};
export const getPage = (state: AppReducers) => {
  return state.user.pageCurrent;
};
export const getTotalUsersCount = (state: AppReducers) => {
  return state.user.totalUsersCount;
};
export const getUserPage = (state: AppReducers) => {
  return state.user.usersPage;
};
export const getIsFetching = (state: AppReducers) => {
  return state.user.isFetching;
};
export const getTogleFollowing = (state: AppReducers) => {
  return state.user.togleFollowing;
};
