import React from 'react';
import createDataContext from './createDataContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

/*
 * @description
 *  Actions( or payload of information ) that can be taken in the
 *  AuthContext. You use them in a dispatch() call
 * @example
 *  dispatch({
 *      type: <Action Type>,
 *       payload: <The Data>,
 *     })
 */

const kACTIONS = {
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT',
  PUSH_ERROR: 'PUSH_ERROR',
  CLEAR_ERROR_MESSAGES: 'CLEAR_ERROR_MESSAGES',
};

/**
 * @description The Different States for the auth.
 * It's very important that the reducer stays pure.
 * Things you should never do inside a reducer:

    Mutate its arguments;
    Perform side effects like API calls and routing transitions;
    Call non-pure functions, e.g. Date.now() or Math.random().

 * @param {*} state The current state of the object you are trying to change.
 * @param {*} action the thing that changes the state
 */
const authReducer = (state, action) => {
  switch (action.type) {
    case kACTIONS.PUSH_ERROR:
      return { ...state, errorMessage: action.payload };
    case kACTIONS.SIGNIN:
      return {
        ...state,
        userInformation: action.userInformation,
      };
    case kACTIONS.SIGNOUT:
      return {
        userInformation: null,
        errorMessage: '',
      };
    case kACTIONS.CLEAR_ERROR_MESSAGES:
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

/**
 * @description Will try to signin
 * @param {*} dispatch
 */

const signinGoogle = dispatch => {
  return async () => {
    // Try to signin

    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const userCredential = await auth().signInWithCredential(googleCredential);

    try {
      dispatch({
        type: kACTIONS.SIGNIN,
        userInformation: userCredential,
      });
    } catch (err) {
      const msg = err.message;
      dispatch({
        type: kACTIONS.PUSH_ERROR,
        payload: msg,
      });
    }
  };
};

/**
 * @description Will try to singout by deleting the accessToken,
 * Refresh Token and the userScope data.
 * @param {*} dispatch
 */
const signout = dispatch => {
  return async () => {
    await auth().signOut();
    await GoogleSignin.signOut();

    dispatch({
      type: kACTIONS.SIGNOUT,
    });

    try {
    } catch (err) {
      const msg = err.message;
      dispatch({
        type: kACTIONS.PUSH_ERROR,
        payload: msg,
      });
    }
  };
};

/**
 * @description Clear the pushed error message that is currently being set
 * @param {*} dispatch
 */
const clearErrorMessage = dispatch => {
  return () => {
    dispatch({ type: kACTIONS.CLEAR_ERROR_MESSAGES });
  };
};

/**
 * @description Make it the authContext available
 */
export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signinGoogle,
    signout,
    clearErrorMessage,
  },
  {
    userInformation: null,
    errorMessage: '',
    username: '',
  },
);