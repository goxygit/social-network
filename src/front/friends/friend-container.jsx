import { connect } from "react-redux";
import React from "react";
import User from "./users";
import Preloader from "../common/preloader";
import {
  usersThunk,
  followThunk,
  unfollowThunk,
  usersPageThunk,
  togleFollowingProgress,
} from "../../redux/reducer/usersReducer";
import { compose } from "redux";
import { withAuthRedirect } from "../common/withAuthRedirect";
import { getIsFetching, getPage, getTogleFollowing, getTotalUsersCount, getUser, getUserPage } from "../../redux/usersSelector";

class Users extends React.Component {
  componentDidMount() {
    this.props.usersThunk(this.props.pageCurrent, this.props.usersPage);
  }

  onPageChanged = (p) => {
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
          togleFollowingProgress={this.props.togleFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUser(state),
    pageCurrent: getPage(state),
    totalUsersCount: getTotalUsersCount(state),
    usersPage: getUserPage(state),
    isFetching: getIsFetching(state),
    togleFollowing: getTogleFollowing(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    usersThunk,
    followThunk,
    unfollowThunk,
    usersPageThunk,
    togleFollowingProgress,
  }),
  withAuthRedirect
)(Users);
