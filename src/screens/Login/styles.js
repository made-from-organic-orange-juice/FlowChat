import React from 'react';
import styled from 'styled-components/native';
import BasicText from '../../shared/components/BasicText';
import { Colors } from '../../shared/constants/colors';
import { SocialIcon, Divider } from 'react-native-elements';

export const {
  white,
  LogoBackground,
  blackBackgroundColor2,
  blackBackgroundColor1,
  grayTextColor,
  lightRedButton,
  PinkBalloon,
} = Colors;

export const SocialButton = styled(props => <SocialIcon button {...props} />)`
  margin-horizontal: 20px;
  margin-vertical: 20px;
  height: 80px;
`;

export const ButtonDivider = styled(props => (
  <Divider style={{ backgroundColor: PinkBalloon, marginHorizontal: 40 }} />
))``;

export const SocialContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  flex-direction: column;
  margin-horizontal: 40px;
  margin-vertical: 20px;
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${PinkBalloon};
`;

export const LoginContainer = styled.View`
  flex: 1;
  border-radius: 60px;
  background-color: ${LogoBackground};
  margin-horizontal: 20px;
  margin-vertical: 20px;
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
  margin-bottom: 10px;
`;
