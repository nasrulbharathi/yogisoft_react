import React, { Component } from "react";
import InputTypeComponent from "../atoms/inputTypeComponent";
import { Button } from "@material-ui/core";
import axiosWrapper from "../../apis/axiosCreate";
import history from "../atoms/history";
import { login, createUser } from "../header/state/actions";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = {
  root: {
    flexGrow: 1,
    flexShrink: 1,
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  toolBar: {
    background: "#32567e",
  },
};

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      firstNameError: false,
      firstNameHelperText: "",
      lastName: "",
      lastNameError: false,
      lastNameHelperText: "",
      email: "",
      emailError: false,
      emailHelperText: "",
      password: "",
      passwordError: false,
      passwordlHelperText: "",
      confirmpassword: "",
      confirmpasswordError: false,
      confirmpasswordlHelperText: "",
    };
  }

  handlfirstNameChange = (event) => {
    let value = event.target.value;
    if (
      // eslint-disable-next-line
      /^[A-Za-z\s]+$/.test(value) &&
      value.length > 0 &&
      value.length < 100
    ) {
      this.setState({
        firstName: value,
        firstNameError: false,
        firstNameHelperText: "",
      });
    } else {
      this.setState({
        firstName: value,
        firstNameError: true,
        firstNameHelperText: "Should be a valid name",
      });
    }
  };

  handllastNameChange = (event) => {
    let value = event.target.value;
    if (
      // eslint-disable-next-line
      /^[A-Za-z\s]+$/.test(value) &&
      value.length > 0 &&
      value.length < 100
    ) {
      this.setState({
        lastName: value,
        lastNameError: false,
        lastNameHelperText: "",
      });
    } else {
      this.setState({
        lastName: value,
        lastNameError: true,
        lastNameHelperText: "Only Valid emails are accepted",
      });
    }
  };

  handlEmailChange = (event) => {
    let value = event.target.value;
    if (
      // eslint-disable-next-line
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) &&
      value.length > 0 &&
      value.length < 100
    ) {
      this.setState({
        email: value,
        emailError: false,
        emailHelperText: "",
      });
      //  this.updatePayload = {...this.updatePayload, cardName: value};
    } else {
      this.setState({
        email: value,
        emailError: true,
        emailHelperText: "Only Valid emails are accepted",
      });
    }
  };

  handlPasswordChange = (event) => {
    let value = event.target.value;
    if (value.length > 0 && value.length < 100) {
      this.setState({
        password: value,
        passwordError: false,
        passwordHelperText: "",
      });
      //  this.updatePayload = {...this.updatePayload, cardName: value};
    } else {
      this.setState({
        password: value,
        passwordError: true,
        passwordHelperText: "Enter Valid password",
      });
    }
  };

  handlConfirmPasswordChange = (event) => {
    let value = event.target.value;
    if (
      this.state.password === value &&
      value.length > 0 &&
      value.length < 100
    ) {
      this.setState({
        confirmpassword: value,
        confirmpasswordError: false,
        confirmpasswordlHelperText: "",
      });
      //  this.updatePayload = {...this.updatePayload, cardName: value};
    } else {
      this.setState({
        confirmpassword: value,
        confirmpasswordError: true,
        confirmpasswordlHelperText: "Password didn't match",
      });
    }
  };

  signUp = async () => {
    const response = await axiosWrapper.get(`/users?email=${this.state.email}`);
    if (response.data && response.data.length > 0) {
      this.setState({
        email: "",
        emailError: true,
        emailHelperText: "Email id is already taken",
      });
    } else {
      const userDetails = {
        id: Math.floor(Math.random() * 100 + 1),
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        balance_points: 0,
        isAdmin: false,
      };
      this.props.createUser(userDetails);
      delete userDetails.password;
      window.sessionStorage.setItem("user", userDetails);
      this.props.login(userDetails);
      history.push("/");
    }
  };

  render() {
    return (
      <>
        <InputTypeComponent
          styles={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            width: "45%",
          }}
          inputType="text"
          inputPlaceholder={"First Name"}
          inputValue={this.state.firstName}
          inputError={this.state.firstNameError}
          endAdornment={false}
          inputHelperText={this.state.firstNameHelperText}
          handleInputChange={this.handlfirstNameChange.bind(this)}
        />

        <InputTypeComponent
          styles={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            width: "45%",
          }}
          inputType="text"
          inputPlaceholder={"Last Name"}
          inputValue={this.state.lastName}
          inputError={this.state.lastNameError}
          endAdornment={false}
          inputHelperText={this.state.lastNameHelperText}
          handleInputChange={this.handllastNameChange.bind(this)}
        />

        <InputTypeComponent
          styles={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            width: "45%",
          }}
          inputType="text"
          inputPlaceholder={"Email Sign"}
          inputValue={this.state.email}
          inputError={this.state.emailError}
          endAdornment={false}
          inputHelperText={this.state.emailHelperText}
          handleInputChange={this.handlEmailChange.bind(this)}
        />

        <InputTypeComponent
          styles={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            width: "45%",
          }}
          inputType="password"
          inputPlaceholder={"Password"}
          inputValue={this.state.password}
          inputError={this.state.passwordError}
          endAdornment={false}
          inputHelperText={this.state.passwordHelperText}
          handleInputChange={this.handlPasswordChange.bind(this)}
        />

        <InputTypeComponent
          styles={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            width: "45%",
          }}
          inputType="password"
          inputPlaceholder={"Confirm Password"}
          inputValue={this.state.confirmpassword}
          inputError={this.state.confirmpasswordError}
          endAdornment={false}
          inputHelperText={this.state.confirmpasswordlHelperText}
          handleInputChange={this.handlConfirmPasswordChange.bind(this)}
        />

        <div style={{ marginTop: "10px", marginBottom: "100px" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "20px" }}
            onClick={this.signUp}
          >
            SignUp
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.loginStatus,
    userDetails: state.login.detailsObject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login, createUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
