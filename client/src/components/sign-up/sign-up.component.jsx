import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { signUpStart } from "../../redux/user/user.actions.js";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userInfo;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Don't Match, Please Try Again!");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Display Name"
          onChange={handleChange}
          value={displayName}
          spellCheck="false"
          autoComplete="on"
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          onChange={handleChange}
          value={email}
          spellCheck="false"
          autoComplete="on"
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          onChange={handleChange}
          value={password}
          spellCheck="false"
          autoComplete="on"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          onChange={handleChange}
          value={confirmPassword}
          spellCheck="false"
          autoComplete="on"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userInfo => dispatch(signUpStart(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUp);
