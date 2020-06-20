import React, { Component } from "react";
import { AutoSizer, List } from "react-virtualized";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import axiosWrapper from "../../apis/axiosCreate";
import { Random_rgba } from "../utility/Random_rgba";
import { Redirect } from "react-router-dom";

export class ShowAllUsers extends Component {
  state = {
    users: [],
    listHeight: 372,
  };
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const response = await axiosWrapper.get("/users");
    this.setState({ users: response.data });
  };

  rowRenderer = ({ index, isScrolling, key, style }) => (
    <div
      className="Row"
      key={key}
      style={{
        ...style,
        whiteSpace: "pre",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              style={{ backgroundColor: Random_rgba() }}
            >
              {this.state.users[index].first_name.charAt(0)}
            </Avatar>
          }
          title={this.state.users[index].email}
          subheader={this.state.users[index].balance_points}
        />
      </Card>
    </div>
  );

  render() {
    if (this.props.isLoggedIn && this.props.userDetails.isAdmin) {
      return (
          <React.Fragment>
            <h2 style={{ marginLeft: "1rem" }}>
              List of All Users and Balance Points
            </h2>
            <div style={{ height: "375px", marginLeft: "1rem" }}>
              <AutoSizer disableWidth>
                {({ height }) => (
                  <List
                    width={1}
                    height={this.state.listHeight}
                    overscanRowsCount={2}
                    rowCount={this.state.users.length}
                    rowHeight={60}
                    rowRenderer={this.rowRenderer}
                    containerStyle={{
                      width: "100%",
                      maxWidth: "100%",
                    }}
                    style={{
                      width: "100%",
                    }}
                  />
                )}
              </AutoSizer>
            </div>
          </React.Fragment>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.loginStatus,
    userDetails: state.login.detailsObject
  };
};

export default connect(mapStateToProps)(
  ShowAllUsers
);
