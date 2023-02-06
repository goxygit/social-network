import React from "react";
import { NavLink } from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import { UsersType } from "../types/types";

type PropsType ={
  totalUsersCount: number
  usersPage: number
  pageCurrent: number
  onPageChanged: (p : number)=> void
  users: Array<UsersType>
  togleFollowing: Array<number>
  unfollowThunk: (id: number)=> void
  followThunk: (id: number)=> void
}

const Users: React.FC<PropsType> = ({ totalUsersCount, usersPage, pageCurrent, onPageChanged, users, ...props}) => {
  debugger
  return (
    <div>
      <Pagination totalUsersCount={totalUsersCount} usersPage={usersPage} pageCurrent={pageCurrent} onPageChanged={onPageChanged}/>
      {users.map(p => (
        <User key={p.id} p={p} togleFollowing={props.togleFollowing} unfollowThunk={props.unfollowThunk} followThunk={props.followThunk}/>
      ))}
    </div>
  );
};
export default Users;
