import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../atoms/profile";
import { Redirect } from "react-router-dom";
import { userDetails } from "../user/state/actions";

export class ProfileContainer extends Component {
  isDetail = false;
  componentDidMount() {
    if (this.props.detailsObject) {
      this.isDetail = true;
      this.props.userDetails(this.props.detailsObject.id);
    }
  }
  render() {
    if (this.props.isLoggedIn) {
      return (
        <Profile
          detailsObject={{
            ...this.props.detailsObject,
            balance_points: this.props.user.balance_points,
          }}
        />
      );
    } else {
      return (
        <div id="profileredirect">
          <Redirect to="/" />
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.loginStatus,
    detailsObject: state.login.detailsObject,
    user: state.users.UserDetails,
  };
};

export default connect(mapStateToProps, { userDetails })(ProfileContainer);
