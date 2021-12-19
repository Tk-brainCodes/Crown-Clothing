import React, {useState, useEffect} from 'react';
import './App.css';
import Homepage from '../src/Pages/Homepage/Homepage.component';
import Shop from './Pages/Shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { Switch, Route} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unSubscribeFromAuth =  null;
  
  useEffect(() => {
   unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        console.log(currentUser)

      } else {
        setCurrentUser(currentUser);
      }
    });
    return () => {
  unSubscribeFromAuth()
  }
  });

  
  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/Shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
