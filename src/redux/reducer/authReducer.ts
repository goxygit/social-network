import { AppReducers } from './../redux-store';
import { ThunkAction } from 'redux-thunk';
import { type } from "os";
import { authApi, ResultCodeEnum, userApi } from "../../front/common/api";
const SET_USER_DATA = 'auth/SET-USER-DATA'

type InitialStateType = typeof initialState

let initialState={
    userId:null as number | null,
    email:null as string | null,
    login:null as string | null,
    isAuth:false
  };
  
  const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
      case SET_USER_DATA:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };

type ActionsType = SetUserDataType
type SetUserDataType ={
    type: typeof SET_USER_DATA,
    payload: {
      userId: number | null,
      email: string | null,
      login:string | null,
      isAuth: boolean}
}

  export const setUserData = (userId: number | null,email: string| null,login: string| null, isAuth: boolean): SetUserDataType => {
    return { type: SET_USER_DATA, payload:{userId,email,login, isAuth} };
  };
  type ThunkType = ThunkAction<Promise<void>, AppReducers, unknown, ActionsType>
  export const getUserData = (): ThunkType => async (dispatch)=>{
    let data= await  userApi.setHeader()
        if (data.resultCode === ResultCodeEnum.Succes) {
          let { id, login, email } = data.data;
          dispatch(setUserData(id, email, login, true))
        }
      
    }
  export const login = (email: string, password: any, rememberMe: boolean): ThunkType => async(dispatch)=>{
    let data= await authApi.login(email, password, rememberMe)
        if (data.resultCode === ResultCodeEnum.Succes) {
          dispatch(getUserData())
        }      
    }
  export const logout = (): ThunkType => async (dispatch)=>{
    let data= await authApi.logout()
      authApi.logout()
        if (data.resultCode === ResultCodeEnum.Succes) {
          dispatch(setUserData(null, null, null, false))
        } 
    }
  export default authReducer;
  