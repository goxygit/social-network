import { UserProfileType, UsersType } from './../types/types';
import axios from "axios";

const instans = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "e258cb2f-c133-4ac3-9f3c-eeefe96bfe28",
  },
});
type UserApiType={
  items: Array<UsersType>
  totalCount: number
  error: string
}
type FollowUnfollowType={
  resultCode: ResultCodeEnum
  messages: Array<string>
  data: {}
 }
export const userApi = {
  setUser(pageCurrent: number, usersPage: number = 8) {
    return instans
      .get<UserApiType>(`users?page=${pageCurrent}&count=${usersPage}`)
      .then((response) => response.data);
  },
  setFollow(id: number) {
    return instans.post<FollowUnfollowType>(`follow/${id}`).then((response) => response.data);
  },
  setUnfollow(id: number) {
    return instans.delete<FollowUnfollowType>(`follow/${id}`).then((response) => response.data);
  },
  setHeader() {
    return authApi.me()
  },
  setProfile(userId: number) {
    return profileApi.setProfile(userId)
  },
};

export const profileApi = {
  setProfile(userId: number) {
    return instans.get<UserProfileType>(`profile/` + userId).then((response)=> response.data)
  },
  updateStatus(status:string) {
    return instans.put<ResponceType>(`profile/status`, {status}).then((response)=> response.data)
  },
  getStatus(userId:number) {
    return instans.get<any>(`profile/status/` + userId).then((response)=> response.data)
  },
  photos(file) {
    const formData = new FormData();
    formData.append("image", file)
    return instans
        .put(`profile/photo`, formData).then((response) => response.data);
}
};
export enum ResultCodeEnum {
  Succes = 0,
  Error = 0
}
type MeResponceType ={
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
}
type LoginResponceType ={
  data: {
    userId: number
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
}
type ResponceType ={
  data: {}
  resultCode: ResultCodeEnum
  messages: Array<string>
}
export const authApi ={
  me() {
    return instans.get<MeResponceType>(`auth/me`).then((response) => response.data);
  },
  login(email: string, password: string, rememberMe: boolean){
    return instans.post<LoginResponceType>(`auth/login`, {email, password, rememberMe }).then((response) => response.data);
  },
  logout(){
    return instans.delete<ResponceType>(`auth/login`).then((response) => response.data);
  },
  
}