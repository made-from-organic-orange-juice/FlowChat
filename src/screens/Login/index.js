//Libraries
import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Includes
import { Context as AuthContext } from '../../shared/context/AuthContext';

// Styles
import {
  LoginContainer,
  Label,
  Logo,
  Line,
  GoogleButton,
  SocialContainer,
} from './styles';

const Login = () => {
  const navigation = useNavigation();
  const { state, signinGoogle, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    if (state.errorMessage !== '') {
      Alert.alert('Error', state.errorMessage);
    }
  }, [state.errorMessage]);

  return (
    <LoginContainer>
      <Logo source={require('../../shared/assets/images/Icon.png')} />
      <Label>FlowChat</Label>
      <Line />
      <SocialContainer>
        <GoogleButton onPress={signinGoogle} />
      </SocialContainer>
    </LoginContainer>
  );
};

export default Login;
