import React from 'react';
import styled from 'styled-components/native';
import { SocialIcon, Divider } from 'react-native-elements';

import BasicText from '../../shared/components/BasicText/index.js';
import { Colors } from '../../shared/constants/colors/index.js';

export const { PastalMutedBlue, PastalYallow, PastalRed, PastalBlue } = Colors;

export const SocialButton = styled(props => <SocialIcon button {...props} />)`
  margin-horizontal: 20px;
  margin-vertical: 20px;
  height: 80px;
`;

export const ButtonDivider = styled(props => <Divider {...props} />)`
  background-color: ${Colors.PastalMutedBlue};
`;

export const SocialContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  flex-direction: column;
  margin-horizontal: 5px;
  margin-vertical: 10px;
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${PastalMutedBlue};
`;

export const LoginContainer = styled.View`
  flex: 1;
  border-radius: 10px;
  background-color: white;
  margin-horizontal: 10px;
  margin-vertical: 10px;
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: { width: 0, height: 2};
  shadow-radius: 10px;
  elevation: 3;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'center',
  resizeMethod: 'scale',
})`
  flex: 0.5;
  justify-content: center;
  align-self: center;
  margin: 10px;
`;

export const Label = styled(props => <BasicText {...props} />)`
  font-weight: bold;
  font-size: 50px;
  align-self: center;
  color: ${PastalBlue};
  margin-bottom: 10px;
`;
