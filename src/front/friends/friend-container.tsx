import { connect } from "react-redux";
import React from "react";
import User from "./users";
import Preloader from "../common/preloader";
import {
  usersThunk,
  followThunk,
  unfollowThunk,
  usersPageThunk,
  
} from "../../redux/reducer/usersReducer";
import { compose } from "redux";
import { withAuthRedirect } from "../common/withAuthRedirect";
import { getIsFetching, getPage, getTogleFollowing, getTotalUsersCount, getUser, getUserPage } from "../../redux/usersSelector";
import { UsersType } from "../types/types";
import { AppReducers } from "../../redux/redux-store";

type MapDispatchPropsType ={
  
  usersThunk: (pageCurrent: number, usersPage:number)=> void
  usersPageThunk: (pageCurrent: number, usersPage:number)=> void
  unfollowThunk: (id: number)=> void
  followThunk: (id: number)=> void
}
type MapStatePropsType ={
  totalUsersCount: number
  usersPage: number
  pageCurrent: number
  users: Array<UsersType>
  togleFollowing: Array<number>
  isFetching: boolean

}
type OwnPropsType ={}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
class Users extends React.Component<PropsType> {
  componentDidMount() {
    this.props.usersThunk(this.props.pageCurrent, this.props.usersPage);
  }

  onPageChanged = (p: number) => {
    this.props.usersPageThunk(p, this.props.usersPage);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <User
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          totalUsersCount={this.props.totalUsersCount}
          usersPage={this.props.usersPage}
          pageCurrent={this.props.pageCurrent}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          togleFollowing={this.props.togleFollowing}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppReducers): MapStatePropsType => {
  return {
    users: getUser(state),
    pageCurrent: getPage(state),
    totalUsersCount: getTotalUsersCount(state),
    usersPage: getUserPage(state),
    isFetching: getIsFetching(state),
    togleFollowing: getTogleFollowing(state),
  };
};

export default compose<React.Component>(
  connect<MapStatePropsType, MapDispatchPropsType,OwnPropsType,  AppReducers>(mapStateToProps, {
    usersThunk,
    followThunk,
    unfollowThunk,
    usersPageThunk,
    
  }),
  withAuthRedirect
)(Users);
