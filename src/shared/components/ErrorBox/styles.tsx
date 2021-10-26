import React from 'react';
import styled from 'styled-components/native';
import BasicText from '../BasicText';
import { Colors } from '../../constants/colors';
import { Animated } from 'react-native';

export const Label = styled((props: JSX.IntrinsicAttributes) => (
  <BasicText {...props} />
))`
  font-weight: normal;
  font-size: 12px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ErrorContainer = styled.View`
  border-color: ${Colors.White};
  border-width: 1px;
  background-color: ${Colors.Red};
  border-radius: 10px;
  height: 100px;
  justify-content: center;
`;

export const ErrorMessage = styled(props => <Label {...props} />)`
  font-size: 20px;
  color: ${Colors.White};
`;

export const AnimatedErrorContainer = styled(props => (
  <Animated.View {...props} />
))`
  margin-top: 5px;
  margin-horizontal: 5px;
`;

export const MainContainer = styled.View``;
