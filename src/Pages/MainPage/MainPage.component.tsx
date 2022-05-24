import React from "react";
import Homepage from "../Homepage/Homepage.component";
import Shop from "../Shop/shop.component";
import Checkout from "../checkout/checkout.components";
import Header from "../../Components/header/header.component";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInAndSignUpPage from "../sign-in-and-sign-up/sign-in-and-sign-up.components";

interface CurrentUserProps {
  currentUser: string;
}

const MainPage = ({ currentUser }: CurrentUserProps) => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};
export default MainPage;
