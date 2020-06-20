import React, { Component } from "react";
import Loadable from "react-loadable";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import history from "./atoms/history";
import Header from "./organisms/Header";
import Footer from "./atoms/Footer";
import Landing from "./pages/Landing";

function Loading({ error }) {
  if (error) {
    return (
      <h2
        style={{
          height: "40px",
          background: "#b3d9f7",
          color: "white",
          textAlign: "center",
          verticalAlign: "middle",
          paddingTop: "5px",
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Oh nooess! Something went wrong. Try re-loading!
      </h2>
    );
  } else {
    return <LinearProgress color="secondary" />;
  }
}

const GiftsListContainer = Loadable({
  loader: () => import("./organisms/GiftsListContainer"),
  loading: Loading,
});

const ProfileContainers = Loadable({
  loader: () => import("./organisms/profileContainers"),
  loading: Loading,
});

const GiftShowContainer = Loadable({
  loader: () => import("./organisms/GiftShowContainer"),
  loading: Loading,
});

const GiftsSendContainer = Loadable({
  loader: () => import("./organisms/giftsSendContainer"),
  loading: Loading,
});

const GiftsReceivedContainer = Loadable({
  loader: () => import("./organisms/giftsReceivedContainer"),
  loading: Loading,
});

const AddUpdateForm = Loadable({
  loader: () => import("./atoms/addUpdateForm"),
  loading: Loading,
});

const ShowAllUsers = Loadable({
  loader: () => import("./pages/showAllUsers"),
  loading: Loading,
});

const ErrorPage = Loadable({
  loader: () => import("./atoms/ErrorPage"),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import("./pages/Login"),
  loading: Loading,
});

const SignUp = Loadable({
  loader: () => import("./pages/SignUp"),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <LocalizeProvider>
        <Header />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/giftCards/:id" component={GiftShowContainer} />
            <Route exact path="/giftCards" component={GiftsListContainer} />
            <Route exact path="/Profile" component={ProfileContainers} />
            <Route exact path="/GiftsSend" component={GiftsSendContainer} />
            <Route
              exact
              path="/GiftsReceived"
              component={GiftsReceivedContainer}
            />
            <Route exact path="/AddUpdateForm" component={AddUpdateForm} />
            <Route exact path="/AddUpdateForm/:id" component={AddUpdateForm} />
            <Route exact path="/showallusers" component={ShowAllUsers} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/404" component={ErrorPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
        <Footer />
      </LocalizeProvider>
    );
  }
}

export default App;
