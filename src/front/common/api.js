import axios from "axios";

const instans = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f90fb9b5-5a56-41a5-9ed5-2a3c9523b546",
  },
});
export const userApi = {
  setUser(pageCurrent, usersPage = 8) {
    return instans
      .get(`users?page=${pageCurrent}&count=${usersPage}`)
      .then((response) => response.data);
  },
  setFollow(p) {
    return instans.post(`follow/${p.id}`).then((response) => response.data);
  },
  setUnfollow(p) {
    return instans.delete(`follow/${p.id}`).then((response) => response.data);
  },
  setHeader() {
    return authApi.me()
  },
  setProfile(userId) {
    return profileApi.setProfile(userId)
  },
};
export const profileApi = {
  setProfile(userId) {
    return instans.get(`profile/` + userId).then((response)=> response.data)
  },
  updateStatus(status) {
    return instans.put(`profile/status`, {status}).then((response)=> response.data)
  },
  getStatus(userId) {
    return instans.get(`profile/status/` + userId).then((response)=> response.data)
  },
  photos(file) {
    const formData = new FormData();
    formData.append("image", file)
    return instans
        .put(`profile/photo`, formData).then((response) => response.data);
}


};
export const authApi ={
  me() {
    return instans.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe){
    return instans.post(`auth/login`, {email, password, rememberMe }).then((response) => response.data);
  },
  logout(){
    return instans.delete(`auth/login`).then((response) => response.data);
  },
  
}