import { profileApi, userApi } from "../../front/common/api";
let ADD_POST = 'profile/ADD-POST'
let SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
let SET_STATUS = 'profile/SET-STATUS'
let initialState = {
  posts: [
    { id: 1, post: "yo kurwa", like: 24 },
    { id: 2, post: " kurwa", like: 1 },
  ],
  i: 2,
  userProfile: null,
  status: "",
};

const ProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = action.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: state.i, post: text, like: state.i }],
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
export const addPost = (newPostText) => {
  return { type: ADD_POST, newPostText };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatusProfile = (status) => {
  return { type: SET_STATUS, status };
};
export const getProfileThunk = (userId) => {
  return (dispatch) => {
    userApi.setProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export const getStatus = (userId) => async (dispatch) => {
  let data = await profileApi.getStatus(userId);
  dispatch(setStatusProfile(data));
};

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileApi.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatusProfile(status));
  }
};

export default ProfilePageReducer;
