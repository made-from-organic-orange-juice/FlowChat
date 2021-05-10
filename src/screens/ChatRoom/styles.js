import React from 'react';
import styled from 'styled-components/native';
import BasicText from '../../shared/components/BasicText';
import { Colors } from '../../shared/constants/colors';
import { SocialIcon, Divider } from 'react-native-elements';
import { TextInput } from 'react-native';

export const {
  white,
  LogoBackground,
  blackBackgroundColor2,
  blackBackgroundColor1,
  grayTextColor,
  lightRedButton,
  PinkBalloon,
} = Colors;

export const RoomContainer = styled.View`
  flex: 1;
  margin: 20px;
  border-radius: 10px;
  background-color: ${LogoBackground};
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${PinkBalloon};
`;

export const Field = styled.View`
  flex-direction: row;
  margin-horizontal: 20px;
  margin-vertical: 10px;
`;

export const MainContainer = styled.View`
  flex: 1;
  border-radius: 10px;
  background-color: ${LogoBackground};
  margin-horizontal: 5px;
  margin-vertical: 5px;
`;

export const SendButtonContainer = styled.View`
  height: 100px;
  background-color: ${LogoBackground};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
`;
