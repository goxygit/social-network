export const getUser = (state) => {
  return state.user.users;
};
export const getPage = (state) => {
  return state.user.pageCurrent;
};
export const getTotalUsersCount = (state) => {
  return state.user.totalUsersCount;
};
export const getUserPage = (state) => {
  return state.user.usersPage;
};
export const getIsFetching = (state) => {
  return state.user.isFetching;
};
export const getTogleFollowing = (state) => {
  return state.user.togleFollowing;
};
