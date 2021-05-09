//Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

// Includes
import { Context as AuthContext } from '../../shared/context/AuthContext';

// Styles
import {
  LoginContainer,
  Label,
  Logo,
  SocialContainer,
  SocialButton,
  ButtonDivider,
  BackgroundContainer,
} from './styles';

const Login = () => {
  const { state, signinGoogle, clearErrorMessage } = useContext(AuthContext);
  const [googleButtonLoading, setGoogleButtonLoading] = useState(false);

  useEffect(() => {
    if (state.errorMessage !== '') {
      // TODO: create something better here... maybe a toast at the button..
      Alert.alert('Error', state.errorMessage);
      setGoogleButtonLoading(false);
      clearErrorMessage();
    }
  }, [state.errorMessage]);

  return (
    <BackgroundContainer>
      <LoginContainer>
        <Logo source={require('../../shared/assets/images/Icon.png')} />
        <Label>FlowChat</Label>
        <ButtonDivider />
        <SocialContainer>
          <SocialButton
            type={'google'}
            title={'Sign In With Google'}
            loading={googleButtonLoading}
            disabled={googleButtonLoading}
            onPress={() => {
              signinGoogle();
              setGoogleButtonLoading(true);
            }}
          />
          <SocialButton
            type={'facebook'}
            title={'Sign In With Facebook'}
            onPress={() => {}}
          />
        </SocialContainer>
      </LoginContainer>
    </BackgroundContainer>
  );
};

export default Login;
