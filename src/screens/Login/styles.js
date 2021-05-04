import React from 'react';
import styled from 'styled-components/native';
import BasicText from '../../shared/components/BasicText';
import Button from '../../shared/components/Button';
import { Colors } from '../../shared/constants/colors';

import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export const {
  white,
  LogoBackground,
  blackBackgroundColor2,
  blackBackgroundColor1,
  grayTextColor,
  lightRedButton,
  PinkBalloon,
} = Colors;

export const GoogleButton = styled(props => (
  <GoogleSigninButton
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    {...props}
  />
))`
  flex: 1;
  align-self: center;
  margin-horizontal: 10px;
  margin-vertical: 10px;
  width: 100%;
`;

export const SocialContainer = styled.View`
  flex: 0.3;
  flex-direction: column;
  margin-horizontal: 40px;
  margin-vertical: 20px;
`;

export const LoginContainer = styled.View`
  flex: 1;
  background-color: ${LogoBackground};
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'center',
  resizeMethod: 'scale',
})`
  flex: 0.5;
  justify-content: center;
  align-self: center;
`;

export const Label = styled(props => <BasicText {...props} />)`
  font-weight: bold;
  font-size: 50px;
  align-self: center;
  color: ${PinkBalloon};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
  background-color: red;
`;

export const Line = styled.View`
  border-bottom-color: ${PinkBalloon};
  border-bottom-width: 1px;
  margin-horizontal: 50px;
`;
