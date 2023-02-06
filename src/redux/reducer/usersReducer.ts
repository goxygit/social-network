import { ResultCodeEnum } from './../../front/common/api';
import { AppReducers } from './../redux-store';
import { ThunkAction } from "redux-thunk";
import { userApi } from "../../front/common/api";
import { UsersType } from "../../front/types/types";
const FOLLOW = 'user/FOLLOW'
const UNFOLLOW = 'user/UNFOLLOW'
const SET_USERS = 'user/SET-USERS'
const SET_CURRENT_PAGE = 'user/SET-CURRENT-PAGE'
const SET_USERS_COUNT = 'user/SET-USERS-COUNT'
const SET_TOTAL_USERS_COUNT = 'user/SET-TOTAL-USERS-COUNT'
const TOGLE_GIF_LOADER = 'user/TOGLE-GIF-LOADER'
const TOGLE_FOLLOWING_PROGRESS = 'user/TOGLE-FOLLOWING-PROGRESS'
let initialState = {
  users: [] as Array<UsersType>,
  pageCurrent: 1,
  totalUsersCount: 0,
  usersPage: 8,
  isFetching: true,
  togleFollowing: [] as Array<number>, //Array id users
};

type InitialStateType = typeof initialState
const MbFriendsReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
          : state.togleFollowing.filter(id => (id = !action.userId)),
      };

    default:
      return state;
  }
};
type ActionsType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType |
SetUsersCountType | SetTotalUserCount | SetTogleGifLoaderType | TogleFollowingProgressType
type FollowType ={
  type: typeof FOLLOW,
  userId:number
}
export const follow = (userId: number):FollowType => {
  return { type: FOLLOW, userId };
};
type UnfollowType ={
  type: typeof UNFOLLOW,
  userId:number
}
export const unfollow = (userId: number):UnfollowType => {
  return { type: UNFOLLOW, userId };
};
type SetUsersType ={
  type: typeof SET_USERS,
  users:Array<UsersType>
}
export const setUsers = (users: Array<UsersType>):SetUsersType => {
  return { type: SET_USERS, users };
};
type SetCurrentPageType ={
  type: typeof SET_CURRENT_PAGE,
  currentPage:number
}
export const setCurrentPage = (currentPage: number):SetCurrentPageType => {
  return { type:  SET_CURRENT_PAGE, currentPage };
};
type SetUsersCountType ={
  type: typeof SET_USERS_COUNT,
  usersCount:number
}
export const setUsersCount = (usersCount: number):SetUsersCountType => {
  return { type: SET_USERS_COUNT, usersCount };
};
type SetTotalUserCount ={
  type: typeof SET_TOTAL_USERS_COUNT,
  usersCount:number
}
export const setTotalUsersCount = (usersCount: number): SetTotalUserCount => {
  return { type: SET_TOTAL_USERS_COUNT, usersCount };
};
type SetTogleGifLoaderType ={
  type: typeof TOGLE_GIF_LOADER,
  isFetching:boolean
}
export const setTogleGifLoader = (isFetching: boolean): SetTogleGifLoaderType => {
  return { type: TOGLE_GIF_LOADER, isFetching };
};
type TogleFollowingProgressType ={
  type: typeof TOGLE_FOLLOWING_PROGRESS,
  isFetching: boolean,
  userId: number
}
export const togleFollowingProgress = (isFetching: boolean, userId: number): TogleFollowingProgressType => {
  return { type: TOGLE_FOLLOWING_PROGRESS, isFetching, userId };
};
type ThunkType = ThunkAction<Promise<void>, AppReducers, unknown, ActionsType>
export const usersThunk = (pageCurrent: number, usersPage:number): ThunkType => async (dispatch, getState) => {
  dispatch(setCurrentPage(pageCurrent))
  dispatch(setTogleGifLoader(true))
   let data= await  userApi.setUser(pageCurrent, usersPage)
      dispatch(setTogleGifLoader(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  };
  
export const usersPageThunk = (pageCurrent: number, usersPage: number): ThunkType => async(dispatch) => {
    dispatch(setCurrentPage(pageCurrent))
    dispatch(setTogleGifLoader(true))
    let data= await userApi.setUser(pageCurrent, usersPage)
      dispatch(setTogleGifLoader(false));
      dispatch(setUsers(data.items));
      
    
  };

export const unfollowThunk = (userID: number): ThunkType => async (dispatch) => {
    dispatch(togleFollowingProgress(true, userID));
    let data= await  userApi.setUnfollow(userID)
      if (data.resultCode === ResultCodeEnum.Succes) {
        dispatch(unfollow(userID));
      }
      dispatch(togleFollowingProgress(false, userID));
  
  };

export const followThunk = (userID: number): ThunkType => async (dispatch: any) => {
    dispatch(togleFollowingProgress(true, userID))
    let data= await userApi.setFollow(userID)
      if (data.resultCode === ResultCodeEnum.Succes) {
        dispatch(follow(userID))
      }
      dispatch(togleFollowingProgress(false, userID))
    
  };


export default MbFriendsReducer;
