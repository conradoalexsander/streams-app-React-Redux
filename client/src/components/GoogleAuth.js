import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "32203911169-8nrgkrn5pg264lcvr5mkf19mks0dse35.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
