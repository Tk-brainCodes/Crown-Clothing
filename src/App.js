import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Homepage from '../src/Pages/Homepage/Homepage.component';
import Shop from './Pages/Shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { Switch, Route, Redirect} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

function App({currentUser}) {
  let unSubscribeFromAuth =  null;
  useEffect(() => {
   // eslint-disable-next-line react-hooks/exhaustive-deps
   unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
  unSubscribeFromAuth();
  }
  });

  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/Shop" component={Shop} />
        <Route exact path="/signin" render={() => currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage/>} /> 
      </Switch>
    </div>
  );
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
