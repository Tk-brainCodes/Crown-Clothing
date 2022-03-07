import {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import MainPage from './Pages/MainPage/MainPage.component';

function App({currentUser, setCurrentUserProfile}) {
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
        setCurrentUserProfile(userAuth);
    });
  });

  
  return (
    <div className="App">
      <MainPage currentUser={currentUser}/>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
   setCurrentUserProfile: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
