import { authApi, userApi } from "../../front/common/api";
const SET_USER_DATA = 'auth/SET-USER-DATA'
let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_DATA:
        return {
          ...state,
          ...action.data,
        };
      default:
        return state;
    }
  };
  export const setUserData = (userId,email,login, isAuth) => {
    return { type: SET_USER_DATA, data:{userId,email,login, isAuth} };
  };
  
  export const getUserData = (user) => async (dispatch)=>{
    let data= await  userApi.setHeader()
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          dispatch(setUserData(id, email, login, true))
        }
      
    }
  export const login = (email, password, rememberMe) => {
    return (dispatch)=>{
      authApi.login(email, password, rememberMe)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(getUserData())
        }
      });
      
    }
  };
  export const logout = () => {
    return (dispatch)=>{
      authApi.logout()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false))
        }
      });
      
    }
  };
  export default authReducer;
  