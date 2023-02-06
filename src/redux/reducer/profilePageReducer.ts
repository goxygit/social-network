import { ThunkAction } from 'redux-thunk';
import { profileApi, ResultCodeEnum, userApi } from "../../front/common/api";
import { ArrayPostType, UserProfileType } from "../../front/types/types";
import { AppReducers } from "../redux-store";
let ADD_POST = 'profile/ADD-POST'
let SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
let SET_STATUS = 'profile/SET-STATUS'
let SET_PHOTO = 'profile/SET-PHOTO'
let initialState = {
  posts: [
    { id: 1, post: "yo kurwa", like: 24 },
    { id: 2, post: " kurwa", like: 1 },
  ] as Array<ArrayPostType>,
  i: 2,
  userProfile: null as UserProfileType | null,
  status: "",
};

type InitialStateType = typeof initialState
const ProfilePageReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let text = action.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: Math.random(), post: text, like: state.i+ 1 }],
      };
      case SET_PHOTO:
      return {
        ...state,
       userProfile: {...state.userProfile, photos:action.photo} as UserProfileType
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
type ActionsType = AddPostType | SetUserProfileType | SetStatusProfileType | SetProfilePhotoType
type AddPostType ={
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostType => {
  return { type: ADD_POST, newPostText };
};
type SetUserProfileType ={
  type: typeof SET_USER_PROFILE,
  profile: UserProfileType 
}
export const setUserProfile = (profile: UserProfileType): SetUserProfileType => {
  return { type: SET_USER_PROFILE, profile };
};
type SetStatusProfileType ={
  type: typeof SET_STATUS,
  status: string
}
export const setStatusProfile = (status:string): SetStatusProfileType => {
  return { type: SET_STATUS, status };
};
type SetProfilePhotoType ={
 type: typeof SET_PHOTO,
 photo: string
}
export const setProfilePhoto = (photo: string): SetProfilePhotoType => {
  return { type: SET_PHOTO, photo };
};
type ThunkType = ThunkAction<Promise<void>, AppReducers, unknown, ActionsType>
export const getProfileThunk = (userId: number): ThunkType => async (dispatch) => {
  let data = await userApi.setProfile(userId)
    dispatch(setUserProfile(data))
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileApi.getStatus(userId);
  dispatch(setStatusProfile(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let data = await profileApi.updateStatus(status);
  if (data.resultCode === ResultCodeEnum.Succes) {
    dispatch(setStatusProfile(status));
  }
};
export const setPhoto = (photo: string): ThunkType => async (dispatch) => {
  let data = await profileApi.photos(photo);
  if (data.resultCode === ResultCodeEnum.Succes) {
    dispatch(setProfilePhoto(data.data.photos));
  }
};

export default ProfilePageReducer
