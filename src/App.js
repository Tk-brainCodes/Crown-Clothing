import {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Homepage from '../src/Pages/Homepage/Homepage.component';
import Shop from './Pages/Shop/shop.component';
import Checkout from './Pages/checkout/checkout.components';
import Header from './Components/header/header.component';
import { Switch, Route, Redirect} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { selectCurrentUser } from './redux/user/user.selector';

function App({currentUser}) {
  useEffect(() => {
   auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } 
        setCurrentUser(userAuth);
    });
  });

  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/Shop" component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path="/signin" render={() => currentUser === true ? <Redirect to="/" /> : <SignInAndSignUpPage />} /> 
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
