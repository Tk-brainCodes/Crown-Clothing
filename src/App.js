import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import MainPage from "./pages/MainPage/MainPage.component";

function App({ currentUser, checkUserSessionUpdate }) {
  useEffect(() => {
    checkUserSessionUpdate();
  }, [checkUserSessionUpdate]);

  return (
    <div className="App">
      <MainPage currentUser={currentUser} />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSessionUpdate: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
