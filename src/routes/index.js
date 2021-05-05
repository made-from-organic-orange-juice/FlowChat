// Libraries
import React, { useEffect, useContext, useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Includes
import { Auth } from '../shared/constants/Auth';
import { Context as AuthContext } from '../shared/context/AuthContext';

import Login from '../screens/Login';
import MainScreen from '../screens/MainScreen';

// Styles
//....

/**
 * @description
 * Create the different routes
 */
const Stack = createStackNavigator();

// if we need otp or registration we can add it to this stack ...
const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Login} />
    </Stack.Navigator>
  );
};

// Our Main stack for the app.
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const { webClientId } = Auth;
  const { state, trySigninSilently } = useContext(AuthContext);

  useEffect(() => {
    // Add everything that needs to be loaded below...

    try {
      // this is for configuration fo firebase
      GoogleSignin.configure({
        webClientId: webClientId,
      });

      // if you are already signed in, just show mainscreen
      trySigninSilently();
      SplashScreen.hide();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <NavigationContainer>
      {/*
       * User us not signed in! Show the login screen
       */}
      {state.userInformation === null ? LoginStack() : MainStack()}
    </NavigationContainer>
  );
};

export default Routes;
