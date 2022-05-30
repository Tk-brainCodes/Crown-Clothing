import React, { useState } from "react";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttons/custom-buttons.component";
import "./sign-up.styles.scss";

const SignUp = ({ signUpUser }: any) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDisplayName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setDisplayName(e.target.value);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target.value);
  const handleConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => setConfirmPassword(e.target.value);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    signUpUser({ displayName, email, password });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not hava an account</h2>
      <span>Sign up with email or password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleDisplayName}
          label="Display Name"
          required
          handleChange={undefined}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          label="Email"
          required
          handleChange={undefined}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          label="Password"
          required
          handleChange={undefined}
        />
        <FormInput
          type="password"
          name="password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          label="Confirm Password"
          required
          handleChange={undefined}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
const matchDispatchToProps = (dispatch: any) => ({
  signUpUser: (userCredentials: any) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, matchDispatchToProps)(SignUp);
