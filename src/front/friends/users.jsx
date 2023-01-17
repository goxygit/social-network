import React from "react";
import f from "./friend.module.css";
import { NavLink } from "react-router-dom";
import friend1 from "../img/friend1.jpg";
import Pagination from "../common/Pagination/Pagination.jsx";
import User from "./User";
const Users = (props) => {
  
  return (
    <div>
      <Pagination totalUsersCount={props.totalUsersCount} usersPage={props.usersPage} pageCurrent={props.pageCurrent} onPageChanged={props.onPageChanged}/>
      {props.users.map((p) => (
        <User p={p} togleFollowing={props.togleFollowing} unfollowThunk={props.unfollowThunk} followThunk={props.followThunk}/>
      ))}
    </div>
  );
};
export default Users;
