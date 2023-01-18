import React from "react";
import "./App.css";
import Header from "./front/header/headerContainer";
import SideBar from "./front/navbar/navbar";
import Content from "./front/content/profile-container";
import Mess from "./front/messages/message-container";
import Friend from "./front/friends/friend-container";
import Login from "./front/login/login";
import { HashRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getInitilize } from "./redux/reducer/appReducer";
import { Load } from "./front/common/preloader";
class App extends React.Component {
  componentDidMount() {
    this.props.getInitilize();
  }
  render() {
    if (!this.props.initialized) {
      return <Load />;
    }
    return (
      <HashRouter basename="/">
        <div className="app-wrapper">
          <Header />
          <SideBar />
          <div className="app-wraper-router">
            <Routes>
              <Route path="/profile/:userId" element={<Content />} />
              <Route path="/profile" element={<Content />} />
              <Route path="/message" element={<Mess />} />
              <Route path="/friends" element={<Friend />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
export default connect(mapStateToProps, { getInitilize })(App);
