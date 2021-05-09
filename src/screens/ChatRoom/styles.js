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

export const MainContainer = styled.View`
  flex: 1;
  border-radius: 60px;
  background-color: ${LogoBackground};
  margin-horizontal: 20px;
  margin-vertical: 20px;
`;
