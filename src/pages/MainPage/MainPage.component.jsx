import { lazy, Suspense } from "react";
import Header from "../../components/header/header.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";
const Homepage = lazy(() => import("../Homepage/Homepage.component"));
const Shop = lazy(() => import("../Shop/shop.component"));
const Checkout = lazy(() => import("../checkout/checkout.components"));
const SignInAndSignUpPage = lazy(() =>
  import("../sign-in-and-sign-up/sign-in-and-sign-up.components")
);

const MainPage = ({ currentUser }) => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={Spinner}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};
export default MainPage;
