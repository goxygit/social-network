import { userApi } from "../../front/common/api";
const FOLLOW = 'user/FOLLOW'
const UNFOLLOW = 'user/UNFOLLOW'
const SET_USERS = 'user/SET-USERS'
const SET_CURRENT_PAGE = 'user/SET-CURRENT-PAGE'
const SET_USERS_COUNT = 'user/SET-USERS-COUNT'
const SET_TOTAL_USERS_COUNT = 'user/SET-TOTAL-USERS-COUNT'
const TOGLE_GIF_LOADER = 'user/TOGLE-GIF-LOADER'
const TOGLE_FOLLOWING_PROGRESS = 'user/TOGLE-FOLLOWING-PROGRESS'
let initialState = {
  users: [],
  pageCurrent: 1,
  totalUsersCount: 0,
  usersPage: 8,
  isFetching: true,
  togleFollowing: [],
};

const MbFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        pageCurrent: action.currentPage,
      };
    case SET_USERS_COUNT:
      return {
        ...state,
        pageCurrent: action.usersCount,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount,
      };
    case TOGLE_GIF_LOADER:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        togleFollowing: action.isFetching
          ? [...state.togleFollowing, action.userId]
          : state.togleFollowing.filter((id) => (id = !action.userId)),
      };

    default:
      return state;
  }
};
export const follow = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
  return { type:  SET_CURRENT_PAGE, currentPage };
};
export const setUsersCount = (usersCount) => {
  return { type: SET_USERS_COUNT, usersCount };
};
export const setTotalUsersCount = (usersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, usersCount };
};
export const setTogleGifLoader = (isFetching) => {
  return { type: TOGLE_GIF_LOADER, isFetching };
};
export const togleFollowingProgress = (isFetching, userId) => {
  return { type: TOGLE_FOLLOWING_PROGRESS, isFetching, userId };
};

export const usersThunk = (pageCurrent, usersPage) => async (dispatch) => {
  dispatch(setCurrentPage(pageCurrent))
  dispatch(setTogleGifLoader(true))
   let data= await  userApi.setUser(pageCurrent, usersPage)
      dispatch(setTogleGifLoader(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  };
  
export const usersPageThunk = (pageCurrent, usersPage) => async(dispatch) => {
    dispatch(setCurrentPage(pageCurrent))
    dispatch(setTogleGifLoader(true))
    let data= await userApi.setUser(pageCurrent, usersPage)
      dispatch(setTogleGifLoader(false));
      dispatch(setUsers(data.items));
      
    
  };

export const unfollowThunk = (user) => async (dispatch) => {
    dispatch(togleFollowingProgress(true, user.id));
    let data= await  userApi.setUnfollow(user)
      if (data.resultCode === 0) {
        dispatch(unfollow(user.id));
      }
      dispatch(togleFollowingProgress(false, user.id));
  
  };

export const followThunk = (user) => async (dispatch) => {
    dispatch(togleFollowingProgress(true, user.id))
    let data= await userApi.setFollow(user)
      if (data.resultCode === 0) {
        dispatch(follow(user.id))
      }
      dispatch(togleFollowingProgress(false, user.id))
    
  };


export default MbFriendsReducer;
