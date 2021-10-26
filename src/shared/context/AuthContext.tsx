import { FC } from 'react';
import createDataContext from './createDataContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { ReducerType, ReducerActions } from '../types/index.js';

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

const reducerActions: ReducerActions = {
  SignIn: 'SignIn',
  SignOut: 'SignOut',
  SetError: 'SetError',
  ClearError: 'ClearError',
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
const authReducer: FC<ReducerType> = (state, action): any => {
  switch (action.type) {
    case reducerActions.SetError:
      return { ...state, errorMessage: action.payload };
    case reducerActions.SignIn:
      return {
        ...state,
        userInformation: action.payload,
      };
    case reducerActions.SignOut:
      return {
        userInformation: null,
        errorMessage: '',
      };
    case reducerActions.ClearError:
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

/**
 * @returns dispatches the users credentials into global state
 */
const signinGoogle = (dispatch: any): any => {
  return async (): Promise<void> => {
    // Try to signin
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      dispatch({
        type: reducerActions.SignIn,
        payload: userCredential,
      });
    } catch (err) {
      const msg = err.message;
      dispatch({
        type: reducerActions.SetError,
        payload: msg,
      });
    }
  };
};

/**
 *
 * @returns if user already logged in, just skip the login process.
 */

const trySigninSilently = (dispatch: any): any => {
  return async () => {
    try {
      const { idToken } = await GoogleSignin.signInSilently();

      if (idToken !== null) {
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const userCredential = await auth().signInWithCredential(
          googleCredential,
        );

        dispatch({
          type: reducerActions.SignIn,
          payload: userCredential,
        });
      }
    } catch (error) {}
  };
};

/**
 *
 * @returns removes user credentials
 */
const signout = (dispatch: any): any => {
  return async () => {
    await auth().signOut();
    await GoogleSignin.signOut();

    dispatch({
      type: reducerActions.SignOut,
    });

    try {
    } catch (err) {
      const msg = err.message;
      dispatch({
        type: reducerActions.SetError,
        payload: msg,
      });
    }
  };
};

/**
 * @description Clear the pushed error message that is currently being set
 * @param {*} dispatch
 */
const clearErrorMessage = (dispatch: any): any => {
  return () => {
    dispatch({ type: reducerActions.ClearError });
  };
};

/**
 *  @description Set an error message
 */

const setErrorMessage = (dispatch: any): any => {
  return (message: string) => {
    dispatch({
      type: reducerActions.SetError,
      payload: message,
    });
  };
};

/**
 * @description Make authContext available
 */
export const { Provider, Context } = createDataContext(
  authReducer,
  {
    trySigninSilently,
    signinGoogle,
    signout,
    clearErrorMessage,
    setErrorMessage,
  },
  {
    userInformation: null,
    errorMessage: '',
    username: '',
  },
);
