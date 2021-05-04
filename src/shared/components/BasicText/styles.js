//import React from 'react';
//import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const BasicText = styled.Text`
  color: ${({ textColor }) => textColor || 'white'};
  font-size: ${({ fontSize }) => fontSize || '13px'};
`;
