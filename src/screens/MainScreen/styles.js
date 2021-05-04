import React from 'react';
import styled from 'styled-components/native';
import BasicText from '../../shared/components/BasicText';
import Button from '../../shared/components/Button';
import { Colors } from '../../shared/constants/colors';

export const {
  white,
  LogoBackground,
  blackBackgroundColor2,
  blackBackgroundColor1,
  grayTextColor,
  lightRedButton,
  PinkBalloon,
} = Colors;

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${LogoBackground}; ;
`;

export const SignoutButton = styled(props => (
  <Button
    label="Signout"
    borderRadius={20}
    flex={0.04}
    color={blackBackgroundColor2}
    marginLeft={40}
    marginRight={40}
    {...props}
  />
))``;

export const Label = styled(props => <BasicText {...props} />)`
  font-weight: bold;
  font-size: 20px;
  align-self: center;
  color: ${PinkBalloon}; ;
`;
