import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  SignInFailure,
  SignInSuccess,
  signOutFailure,
  signOutSuccess,
} from "./user.actions";

//auth helper function
export function* getSnapShotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get(); //get the user collection
    yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })); //get the id and data of the user
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

//sign in with google
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

//sign in with email
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

//check user session
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

//sign out
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* checkUserSessions() {
  yield takeLatest(UserActionTypes.CHECK_USER_SECTIONS, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(checkUserSessions),
    call(onSignOutStart),
  ]);
}
