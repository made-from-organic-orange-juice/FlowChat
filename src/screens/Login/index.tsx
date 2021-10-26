//Libraries
import React, { useContext, useState } from 'react';

// Includes
import { Context as AuthContext } from '../../shared/context/AuthContext';
import ErrorBox from '../../shared/components/ErrorBox';

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

/********************************************************************************
 *  Login Component
 * ******************************************************************************/

const Login = () => {
  const { signinGoogle } = useContext(AuthContext);
  const [googleButtonLoading, setGoogleButtonLoading] = useState<Boolean>(
    false,
  );

  return (
    <BackgroundContainer>
      <ErrorBox onError={() => setGoogleButtonLoading(false)} />
      <LoginContainer>
        <Logo source={require('../../shared/assets/images/Icon3.png')} />
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
        </SocialContainer>
      </LoginContainer>
    </BackgroundContainer>
  );
};

export default Login;
